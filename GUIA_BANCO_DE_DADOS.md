# 🗄️ Guia de Integração com Banco de Dados - Talentoo

## 📌 Visão Geral

Este documento fornece instruções detalhadas sobre como conectar a tela de login do Talentoo a um banco de dados real. Atualmente, o sistema possui apenas a interface frontend. Este guia ajudará você a implementar a camada de backend e persistência de dados.

---

## 🏗️ Arquitetura Recomendada

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Frontend  │ ───> │   Backend   │ ───> │   Banco de  │
│  (HTML/JS)  │ HTTP │   (API)     │ SQL  │    Dados    │
└─────────────┘      └─────────────┘      └─────────────┘
```

### Componentes:

1. **Frontend**: Interface do usuário (já implementado)
2. **Backend/API**: Servidor que processa requisições e valida credenciais
3. **Banco de Dados**: Armazena informações dos usuários

---

## 📊 Estrutura do Banco de Dados

### Tabela: `users`

Esta tabela armazena as informações básicas dos usuários do sistema.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('cliente', 'profissional', 'admin') NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    INDEX idx_email (email),
    INDEX idx_username (username)
);
```

**Campos explicados:**

- `id`: Identificador único do usuário
- `email`: E-mail do usuário (único, usado para login)
- `username`: Nome de usuário (opcional, também pode ser usado para login)
- `password_hash`: Senha criptografada (NUNCA armazene senhas em texto plano!)
- `user_type`: Tipo de usuário (cliente, profissional ou administrador)
- `full_name`: Nome completo do usuário
- `phone`: Telefone de contato
- `created_at`: Data de criação da conta
- `updated_at`: Data da última atualização
- `last_login`: Data do último login
- `is_active`: Indica se a conta está ativa
- `is_verified`: Indica se o e-mail foi verificado

### Tabela: `sessions` (Opcional, mas recomendado)

Gerencia as sessões ativas dos usuários.

```sql
CREATE TABLE sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    token VARCHAR(500) NOT NULL UNIQUE,
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_token (token),
    INDEX idx_user_id (user_id)
);
```

### Tabela: `password_resets` (Para recuperação de senha)

```sql
CREATE TABLE password_resets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_token (token)
);
```

### Tabela: `oauth_accounts` (Para login social)

```sql
CREATE TABLE oauth_accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    provider ENUM('google', 'facebook') NOT NULL,
    provider_user_id VARCHAR(255) NOT NULL,
    access_token TEXT,
    refresh_token TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_provider_user (provider, provider_user_id)
);
```

---

## 🔧 Implementação do Backend

### Opção 1: Node.js + Express

#### 1. Instalar dependências:

```bash
npm init -y
npm install express bcrypt jsonwebtoken mysql2 dotenv cors
```

#### 2. Criar arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=talentoo
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
JWT_EXPIRES_IN=7d
PORT=3000
```

#### 3. Criar conexão com banco (`db.js`):

```javascript
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
```

#### 4. Criar rota de login (`routes/auth.js`):

```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;

        // Validação básica
        if (!email || !password) {
            return res.status(400).json({ 
                error: 'E-mail e senha são obrigatórios' 
            });
        }

        // Busca usuário no banco (por email ou username)
        const [users] = await db.query(
            'SELECT * FROM users WHERE (email = ? OR username = ?) AND is_active = TRUE',
            [email, email]
        );

        if (users.length === 0) {
            return res.status(401).json({ 
                error: 'Credenciais inválidas' 
            });
        }

        const user = users[0];

        // Verifica a senha
        const passwordMatch = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatch) {
            return res.status(401).json({ 
                error: 'Credenciais inválidas' 
            });
        }

        // Atualiza último login
        await db.query(
            'UPDATE users SET last_login = NOW() WHERE id = ?',
            [user.id]
        );

        // Gera token JWT
        const expiresIn = rememberMe ? '30d' : '7d';
        const token = jwt.sign(
            { 
                userId: user.id, 
                email: user.email,
                userType: user.user_type 
            },
            process.env.JWT_SECRET,
            { expiresIn }
        );

        // Salva sessão no banco (opcional)
        await db.query(
            `INSERT INTO sessions (user_id, token, ip_address, user_agent, expires_at) 
             VALUES (?, ?, ?, ?, DATE_ADD(NOW(), INTERVAL ? DAY))`,
            [
                user.id, 
                token, 
                req.ip, 
                req.headers['user-agent'],
                rememberMe ? 30 : 7
            ]
        );

        // Retorna sucesso
        res.json({
            success: true,
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                fullName: user.full_name,
                userType: user.user_type
            }
        });

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor' 
        });
    }
});

module.exports = router;
```

#### 5. Criar servidor principal (`server.js`):

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
```

#### 6. Executar:

```bash
node server.js
```

---

### Opção 2: Python + Flask

#### 1. Instalar dependências:

```bash
pip install flask flask-cors pymysql bcrypt pyjwt python-dotenv
```

#### 2. Criar arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=talentoo
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
```

#### 3. Criar aplicação (`app.py`):

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuração do banco
def get_db_connection():
    return pymysql.connect(
        host=os.getenv('DB_HOST'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database=os.getenv('DB_NAME'),
        cursorclass=pymysql.cursors.DictCursor
    )

# Rota de login
@app.route('/api/auth/login', methods=['POST'])
def login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        remember_me = data.get('rememberMe', False)

        if not email or not password:
            return jsonify({'error': 'E-mail e senha são obrigatórios'}), 400

        # Busca usuário
        conn = get_db_connection()
        cursor = conn.cursor()
        
        cursor.execute(
            "SELECT * FROM users WHERE (email = %s OR username = %s) AND is_active = TRUE",
            (email, email)
        )
        user = cursor.fetchone()

        if not user:
            return jsonify({'error': 'Credenciais inválidas'}), 401

        # Verifica senha
        if not bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
            return jsonify({'error': 'Credenciais inválidas'}), 401

        # Atualiza último login
        cursor.execute(
            "UPDATE users SET last_login = NOW() WHERE id = %s",
            (user['id'],)
        )
        conn.commit()

        # Gera token JWT
        expires_delta = datetime.timedelta(days=30 if remember_me else 7)
        token = jwt.encode(
            {
                'userId': user['id'],
                'email': user['email'],
                'userType': user['user_type'],
                'exp': datetime.datetime.utcnow() + expires_delta
            },
            os.getenv('JWT_SECRET'),
            algorithm='HS256'
        )

        cursor.close()
        conn.close()

        return jsonify({
            'success': True,
            'token': token,
            'user': {
                'id': user['id'],
                'email': user['email'],
                'username': user['username'],
                'fullName': user['full_name'],
                'userType': user['user_type']
            }
        })

    except Exception as e:
        print(f"Erro no login: {e}")
        return jsonify({'error': 'Erro interno do servidor'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)
```

#### 4. Executar:

```bash
python app.py
```

---

## 🔗 Integração Frontend ↔ Backend

### Atualizar o arquivo `js/login.js`

Substitua a função `processLogin()` por:

```javascript
async function processLogin() {
    const loginData = {
        email: emailInput.value.trim(),
        password: passwordInput.value,
        rememberMe: rememberMeCheckbox.checked
    };
    
    const btnLogin = loginForm.querySelector('.btn-login');
    const btnText = btnLogin.querySelector('span');
    const btnIcon = btnLogin.querySelector('i');
    
    btnText.textContent = 'Entrando...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    btnLogin.disabled = true;
    
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Erro ao fazer login');
        }
        
        // Armazena o token
        if (loginData.rememberMe) {
            localStorage.setItem('authToken', data.token);
        } else {
            sessionStorage.setItem('authToken', data.token);
        }
        
        // Armazena dados do usuário
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redireciona para o dashboard
        window.location.href = '/dashboard.html';
        
    } catch (error) {
        console.error('Erro:', error);
        showError(passwordInput, passwordError, error.message);
        
        btnText.textContent = 'Entrar';
        btnIcon.className = 'fas fa-arrow-right';
        btnLogin.disabled = false;
    }
}
```

---

## 🔐 Segurança - Checklist

### ✅ Obrigatório:

- [ ] **HTTPS**: Use sempre HTTPS em produção
- [ ] **Hash de senhas**: Use bcrypt com salt rounds >= 10
- [ ] **Validação no backend**: Nunca confie apenas no frontend
- [ ] **SQL Injection**: Use prepared statements/parameterized queries
- [ ] **Rate Limiting**: Limite tentativas de login (ex: 5 por minuto)
- [ ] **CORS**: Configure corretamente as origens permitidas
- [ ] **JWT Secret**: Use uma chave forte e mantenha em segredo
- [ ] **Token Expiration**: Defina tempo de expiração adequado
- [ ] **Sanitização**: Limpe e valide todos os inputs

### 🔒 Recomendado:

- [ ] **2FA**: Autenticação de dois fatores
- [ ] **Captcha**: Proteção contra bots (Google reCAPTCHA)
- [ ] **Logs**: Registre tentativas de login (sucesso e falha)
- [ ] **IP Blocking**: Bloqueie IPs suspeitos
- [ ] **Password Policy**: Exija senhas fortes
- [ ] **Account Lockout**: Bloqueie conta após X tentativas falhas
- [ ] **Session Management**: Invalide sessões antigas

---

## 📝 Exemplo de Cadastro de Usuário

Para criar um usuário de teste:

```sql
-- Senha: senha123 (hash gerado com bcrypt)
INSERT INTO users (email, username, password_hash, user_type, full_name, is_verified) 
VALUES (
    'teste@talentoo.com',
    'usuario_teste',
    '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    'cliente',
    'Usuário de Teste',
    TRUE
);
```

Ou via código (Node.js):

```javascript
const bcrypt = require('bcrypt');

const password = 'senha123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, async (err, hash) => {
    await db.query(
        `INSERT INTO users (email, username, password_hash, user_type, full_name, is_verified) 
         VALUES (?, ?, ?, ?, ?, TRUE)`,
        ['teste@talentoo.com', 'usuario_teste', hash, 'cliente', 'Usuário de Teste']
    );
});
```

---

## 🚀 Próximos Passos

1. **Criar o banco de dados** usando os scripts SQL fornecidos
2. **Escolher e implementar o backend** (Node.js ou Python)
3. **Atualizar o frontend** para fazer requisições ao backend
4. **Testar a integração** completa
5. **Implementar recuperação de senha**
6. **Adicionar login social** (Google/Facebook)
7. **Criar página de cadastro**
8. **Implementar dashboard** pós-login

---

## 📚 Recursos Adicionais

- [Documentação bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [JWT.io](https://jwt.io/) - Debugger de tokens JWT
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Principais vulnerabilidades web
- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

---

**Desenvolvido para o Talentoo** 🚀

