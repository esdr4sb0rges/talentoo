# 🚀 Talentoo - Sistema Completo

## 📋 Sobre o Projeto

O **Talentoo** é uma plataforma inovadora que conecta profissionais autônomos a clientes, facilitando a contratação de serviços especializados. Este projeto inclui todas as páginas principais do sistema, desenvolvidas com HTML, CSS e JavaScript puro, seguindo as especificações de design, cores e responsividade solicitadas.

## 🎨 Paleta de Cores

| Cor | Código HEX | Uso |
|-----|------------|-----|
| **Cor Primária** | `#274C77` | Fundo de cabeçalho, footer e cards ativos |
| **Cor Secundária** | `#6096BA` | Destaques suaves e links |
| **Cor de Apoio** | `#A3CEF1` | Botões, ícones e interações |
| **Background Geral** | `#E7ECEF` | Seções claras e fundo principal |
| **Texto Secundário** | `#8B8C89` | Elementos neutros |

## 🖋️ Tipografia

- **Montserrat** (400, 600, 700): Para títulos e elementos de destaque
- **Open Sans** (300, 400, 600): Para corpo de texto e inputs

## 📁 Estrutura de Arquivos

```
talentoo-login/
│
├── index.html                  # Página de Login
├── home.html                   # Página Home (Landing Page)
├── sobre.html                  # Página Sobre/Como Funciona
├── cadastro.html               # Página de Cadastro
├── buscar.html                 # Página de Busca/Resultados
├── perfil.html                 # Página de Perfil do Profissional
├── 404.html                    # Página de Erro 404
│
├── css/
│   ├── styles.css              # Estilos globais (compartilhados)
│   ├── home.css                # Estilos da página Home
│   ├── sobre.css               # Estilos da página Sobre
│   ├── cadastro.css            # Estilos da página Cadastro
│   ├── buscar.css              # Estilos da página de Busca/Resultados
│   ├── perfil.css              # Estilos da página de Perfil do Profissional
│   └── 404.css                 # Estilos da página de Erro 404
│
├── js/
│   ├── login.js                # Lógica da página de Login
│   ├── navbar.js               # Funcionalidade do menu de navegação
│   ├── faq.js                  # Funcionalidade do FAQ (accordion)
│   ├── cadastro.js             # Lógica da página de Cadastro
│   ├── buscar.js               # Lógica da página de Busca/Resultados
│   ├── perfil.js               # Lógica da página de Perfil do Profissional
│   └── 404.js                  # Lógica da página de Erro 404
│
├── assets/                     # Pasta para imagens e recursos
│
├── README.md                   # Documentação da tela de login
├── README_COMPLETO.md          # Esta documentação completa
├── GUIA_BANCO_DE_DADOS.md      # Guia de integração com banco de dados
├── GUIA_NAVEGACAO.md           # Guia de Navegação entre as páginas
└── INICIO_RAPIDO.md            # Guia de Início Rápido
```

## 📄 Páginas Desenvolvidas

### 1. **Home (home.html)**
Página principal de apresentação do Talentoo com:
- Hero section com título impactante e CTAs
- Seção de features (6 diferenciais principais)
- Como funciona (4 passos)
- Estatísticas impressionantes
- CTA final para cadastro
- Navbar responsivo com menu mobile
- Footer padrão

**Links principais:**
- Buscar Profissionais → `buscar.html`
- Oferecer Serviços → `cadastro.html?tipo=profissional`
- Como Funciona → `sobre.html`
- Entrar → `index.html`

### 2. **Sobre/Como Funciona (sobre.html)**
Página explicativa detalhada com:
- Hero section explicativo
- Seção "O que é o Talentoo?"
- Processo para Clientes (5 passos)
- Processo para Profissionais (5 passos)
- Diferenciais da plataforma (4 cards)
- FAQ interativo (5 perguntas frequentes)
- CTAs para cadastro

**Funcionalidades:**
- FAQ com accordion (abre/fecha perguntas)
- Navegação integrada
- Design responsivo

### 3. **Cadastro (cadastro.html)**
Formulário completo de registro com:
- Seletor de tipo de usuário (Cliente/Profissional)
- Campos dinâmicos baseados no tipo
- Validação em tempo real
- Máscara de telefone automática
- Toggle de visualização de senha
- Checkbox de termos e condições
- Opções de cadastro social (Google/Facebook)
- Link para login

**Campos do formulário:**
- **Comuns:** Nome completo, Email, Telefone, Localização, Senha
- **Profissional:** Categoria de serviço, Anos de experiência

**Validações implementadas:**
- Nome completo (mínimo 2 palavras)
- Email válido (regex)
- Telefone (mínimo 10 dígitos)
- Senha forte (mínimo 8 caracteres, letras e números)
- Confirmação de senha
- Aceitação de termos

### 4. **Login (index.html)**
Tela de autenticação com:
- Campos de email/usuário e senha
- Toggle de visualização de senha
- Checkbox "Lembrar-me"
- Link "Esqueceu a senha?"
- Botões de login social
- Link para cadastro
- Validação de formulário

### 5. **Busca / Resultados (buscar.html)**
Página para encontrar profissionais com:
- Barra de busca principal (termo e localização)
- Sidebar de filtros (categoria, avaliação mínima, experiência, disponibilidade)
- Listagem de profissionais em cards elegantes
- Paginação para navegar entre os resultados
- Opções de ordenação (relevância, avaliação, experiência, recentes)
- Funcionalidade responsiva para filtros em mobile

**Funcionalidades:**
- Filtros interativos que atualizam os resultados em tempo real (simulado)
- Ordenação dinâmica dos profissionais
- Navegação para o perfil do profissional ao clicar no card

### 6. **Perfil do Profissional (perfil.html)**
Página detalhada do profissional com:
- Cabeçalho com nome, categoria, avaliação, localização e experiência
- Botões de ação (Solicitar Orçamento, Compartilhar)
- Navegação por abas (Sobre, Portfólio, Avaliações, Contato)
- **Aba "Sobre":** Descrição detalhada, especialidades (tags), serviços oferecidos, informações adicionais (disponibilidade, membro desde, verificado), certificações.
- **Aba "Portfólio":** Galeria de trabalhos com modal para visualização ampliada.
- **Aba "Avaliações":** Resumo das avaliações e lista de comentários de clientes.
- **Aba "Contato":** Formulário para solicitar orçamento, com campos pré-preenchidos e máscara de telefone.

**Funcionalidades:**
- Abas interativas para organizar o conteúdo
- Formulário de contato com simulação de envio e máscara de telefone
- Modal para visualização de imagens do portfólio
- Geração dinâmica de estrelas de avaliação

### 7. **404 - Página Não Encontrada (404.html)**
Página de erro amigável e informativa com:
- Design criativo e elementos animados (números 404)
- Mensagem clara de que a página não foi encontrada
- Sugestões de ações (voltar para Home, buscar profissionais)
- Links úteis para outras seções do site
- Lista de categorias populares
- Opção de contato para suporte

**Funcionalidades:**
- Efeitos visuais e animações para uma experiência mais agradável
- Links para facilitar a navegação de volta ao site

## 🔗 Fluxo de Navegação

```
Home (home.html)
├── Como Funciona → sobre.html
├── Buscar → buscar.html
├── Cadastrar → cadastro.html
├── Entrar → index.html
│
Sobre (sobre.html)
├── Home → home.html
├── Buscar → buscar.html
├── Cadastrar (Cliente) → cadastro.html?tipo=cliente
├── Cadastrar (Profissional) → cadastro.html?tipo=profissional
├── Entrar → index.html
│
Cadastro (cadastro.html)
├── Já tem conta? → index.html
├── Voltar para Home → home.html
│
Login (index.html)
├── Criar conta → cadastro.html
├── Voltar para Home → home.html
│
Busca (buscar.html)
├── Home → home.html
├── Sobre → sobre.html
├── Cadastrar → cadastro.html
├── Entrar → index.html
├── Clicar em Profissional → perfil.html?id={id_do_profissional}
│
Perfil (perfil.html)
├── Home → home.html
├── Buscar → buscar.html
├── Solicitar Orçamento → (simulação de envio)
├── Compartilhar → (copia URL ou usa API nativa)
├── Abas (Sobre, Portfólio, Avaliações, Contato)
│
404 (404.html)
├── Voltar para Home → home.html
├── Buscar Profissionais → buscar.html
├── Links Úteis → (diversas páginas)
```

## ✨ Funcionalidades Implementadas

### **Navbar Responsivo**
- Menu desktop com links horizontais
- Menu mobile com toggle (hamburguer)
- Fecha automaticamente ao clicar em link
- Fecha ao clicar fora do menu
- Animações suaves de abertura/fechamento

### **FAQ Interativo**
- Accordion com abrir/fechar
- Fecha outros itens ao abrir um novo
- Ícone animado (seta rotativa)
- Transições suaves

### **Formulário de Cadastro Dinâmico**
- Campos aparecem/desaparecem baseado no tipo de usuário
- Validação em tempo real
- Máscara de telefone brasileira
- Força de senha verificada
- Feedback visual de erros

### **Validação de Formulários**
- Validação no frontend (UX)
- Mensagens de erro personalizadas
- Destaque visual em campos com erro
- Scroll automático para primeiro erro

### **Busca e Filtros de Profissionais**
- Filtragem por termo, localização, categoria, avaliação, experiência e disponibilidade (simulado)
- Ordenação de resultados
- Paginação

### **Página de Perfil Interativa**
- Abas para organizar informações (Sobre, Portfólio, Avaliações, Contato)
- Galeria de portfólio com modal de visualização
- Formulário de contato com máscara e simulação de envio

### **Página 404 Amigável**
- Design criativo e animado
- Sugestões de navegação e links úteis

## 📱 Responsividade

Todas as páginas são totalmente responsivas com breakpoints para:

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** 360px - 480px
- **Mobile pequeno:** < 360px
- **Landscape:** Altura < 600px

### Adaptações Mobile:
- Menu hamburguer
- Cards em coluna única
- Botões full-width
- Fontes redimensionadas
- Espaçamentos otimizados
- Hero sections compactas
- Sidebar de filtros responsiva na página de busca
- Layout de perfil adaptado para telas menores

## 🚀 Como Usar

### **1. Visualizar Localmente**

Abra qualquer arquivo HTML diretamente no navegador:
```bash
# Navegue até a pasta
cd talentoo-login

# Abra no navegador (exemplo)
open home.html  # macOS
start home.html # Windows
xdg-open home.html # Linux
```

### **2. Servidor Local (Recomendado)**

Para evitar problemas com CORS e simular ambiente de produção:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000/home.html`

### **3. Testar Funcionalidades**

**Home:**
- Clique nos botões CTA e veja os redirecionamentos
- Teste o menu mobile (redimensione a janela)
- Navegue entre as seções

**Sobre:**
- Clique nas perguntas do FAQ
- Teste os botões de cadastro com parâmetros

**Cadastro:**
- Alterne entre Cliente e Profissional
- Preencha campos e veja validações
- Teste máscaras e toggles de senha
- Tente submeter com erros

**Login:**
- Teste validações de email e senha
- Use o toggle de visualização de senha
- Clique em "Esqueceu a senha?"

**Busca:**
- Use a barra de busca e os filtros para encontrar profissionais (resultados simulados)
- Clique nos cards de profissionais para ir para a página de perfil
- Teste a paginação

**Perfil:**
- Navegue entre as abas (Sobre, Portfólio, Avaliações, Contato)
- Clique nas imagens do portfólio para abrir o modal
- Preencha e "envie" o formulário de contato (simulado)

**404:**
- Navegue para `404.html` ou uma URL inexistente para ver a página de erro
- Clique nos botões e links para retornar ao site

## 🔐 Integração com Backend

### **Endpoints Necessários**

```javascript
// Cadastro
POST /api/auth/register
Body: {
  fullName, email, phone, userType, location, password,
  category?, experience? // se profissional
}

// Login
POST /api/auth/login
Body: { email, password, rememberMe }

// Recuperação de senha
POST /api/auth/forgot-password
Body: { email }

// Login Social
POST /api/auth/google
POST /api/auth/facebook
Body: { token }

// Busca de Profissionais
GET /api/professionals?query={termo}&location={local}&category={cat}&minRating={rating}&exp={exp}&avail={avail}&sort={sort}&page={page}

// Detalhes do Profissional
GET /api/professionals/{id}

// Contato com Profissional
POST /api/contact/professional
Body: { professionalId, name, email, phone, service, message }
```

### **Arquivos a Modificar**

1. **js/cadastro.js** - Função `processSignup()`
2. **js/login.js** - Função `processLogin()`
3. **js/buscar.js** - Funções `applyFilters()`, `renderProfessionals()` (para buscar dados reais)
4. **js/perfil.js** - Função `loadProfessionalData()` (para buscar dados reais) e `processContactForm()`

Consulte os comentários detalhados nos arquivos JavaScript e o `GUIA_BANCO_DE_DADOS.md` para instruções completas.

## 🎯 Próximos Passos

### **Backend/API**
- [ ] Criar endpoints de autenticação
- [ ] Implementar validação de dados
- [ ] Sistema de hash de senhas (bcrypt)
- [ ] Geração de tokens JWT
- [ ] Envio de emails de confirmação
- [ ] Implementar lógica de busca e filtros reais
- [ ] Gerenciamento de perfis de profissionais
- [ ] Gerenciamento de avaliações
- [ ] Envio de emails de contato para profissionais

### **Banco de Dados**
- [ ] Criar tabelas (users, sessions, password_resets, professionals, portfolio_items, reviews, contact_requests)
- [ ] Implementar índices
- [ ] Sistema de backup

### **Funcionalidades Adicionais**
- [ ] Dashboard pós-login
- [ ] Perfil de usuário (edição)
- [ ] Sistema de mensagens
- [ ] Avaliações e comentários (funcional)
- [ ] Upload de portfólio (funcional)
- [ ] Notificações

### **Melhorias**
- [ ] Implementar 2FA
- [ ] Adicionar captcha
- [ ] Sistema de logs
- [ ] Analytics
- [ ] SEO otimizado
- [ ] PWA (Progressive Web App)

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica
- **CSS3:** Flexbox, Grid, Animações, Transições
- **JavaScript (ES6+):** Validações, Interações, DOM manipulation
- **Google Fonts:** Montserrat, Open Sans
- **Font Awesome 6:** Ícones vetoriais

## 📝 Boas Práticas Implementadas

### **HTML**
✅ Semântica correta  
✅ Acessibilidade (labels, alt texts)  
✅ Meta tags adequadas  
✅ Estrutura organizada  

### **CSS**
✅ Variáveis CSS (custom properties)  
✅ Mobile First approach  
✅ BEM-like naming convention  
✅ Animações performáticas (GPU)  
✅ Código comentado e organizado  

### **JavaScript**
✅ Código modular e reutilizável  
✅ Event delegation quando apropriado  
✅ Validações robustas  
✅ Comentários explicativos  
✅ Preparado para integração com API  
✅ Simulação de dados para desenvolvimento frontend

## 🔒 Segurança

### **Frontend (Implementado)**
✅ Validação de inputs  
✅ Sanitização básica  
✅ Feedback de erros sem expor sistema  
✅ HTTPS recomendado (produção)  

### **Backend (A Implementar)**
⚠️ Hash de senhas (bcrypt)  
⚠️ Proteção contra SQL Injection  
⚠️ Rate limiting  
⚠️ CORS configurado  
⚠️ Tokens com expiração  
⚠️ Validação server-side  

## 📞 Suporte e Documentação

- **README.md** - Documentação da tela de login
- **README_COMPLETO.md** - Esta documentação (visão geral)
- **GUIA_BANCO_DE_DADOS.md** - Integração com backend
- **GUIA_NAVEGACAO.md** - Guia de Navegação entre as páginas
- **INICIO_RAPIDO.md** - Guia de Início Rápido
- **Comentários no código** - Instruções inline

## 🎨 Customização

### **Cores**
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --primary-color: #274C77;
    --secondary-color: #6096BA;
    --accent-color: #A3CEF1;
    /* ... */
}
```

### **Fontes**
Altere os imports no `<head>` de cada HTML e atualize as variáveis:
```css
:root {
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Open Sans', sans-serif;
}
```

### **Conteúdo**
Edite diretamente os arquivos HTML para alterar textos, imagens e estrutura.

## 📄 Licença

Este projeto faz parte do sistema Talentoo desenvolvido pela **FADESA - Faculdade para o Desenvolvimento Sustentável da Amazônia**.

---

**Desenvolvido com ❤️ para o Talentoo**

*"Conectando talentos e oportunidades"*

## 🚀 Deploy

### **Opções de Hospedagem**

1. **Netlify** (Recomendado para frontend)
   ```bash
   # Arraste a pasta para netlify.com/drop
   # ou use CLI
   netlify deploy --prod
   ```

2. **Vercel**
   ```bash
   vercel --prod
   ```

3. **GitHub Pages**
   - Faça push para repositório
   - Ative nas Settings > Pages

4. **Servidor Próprio**
   - Upload via FTP/SSH
   - Configure servidor web (Apache/Nginx)

---

**Status:** ✅ Frontend Completo | ⏳ Backend Pendente

**Versão:** 1.0.0

**Última Atualização:** Outubro 2025

