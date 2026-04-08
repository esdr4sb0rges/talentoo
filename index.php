<?php
require_once './config/db.php';
session_start();
?>
 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Talentoo - Plataforma de conexão entre profissionais autônomos e clientes">
    <title>Talentoo - Login</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    
    <!-- Font Awesome para ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- CSS customizado -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="shortcut icon" href="assets/static/images/talentoo.ico" type="image/x-icon">
</head>
<body>
    <!-- Header/Navbar -->
    <header class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <img src="assets/static/images/talentoo-logo.png" alt="Logo Talentoo">
            </div>
            <nav class="navbar-menu">
                <a href="home.html">Home</a>
                <a href="sobre.html">Sobre</a>
                <a href="buscar.html">Buscar</a>
                <a href="views/cadastro-cliente.php">Cadastrar</a>
                <!-- <a href="index.html" class="btn-nav-login">Entrar</a> -->
            </nav>
            <button class="navbar-toggle" id="navbarToggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Container Principal -->
    <div class="login-container">
        <!-- Card de Login -->
        <div class="login-card">
            <!-- Cabeçalho com Logo -->
            <div class="login-header">
                <div class="logo">
                    <!-- <i class="fas fa-users-cog"></i>
                    <h1>Talentoo</h1> -->
                    <img src="assets/static/images/talentoo-logo.png" alt="Logo Talentoo">
                </div>
                <p class="subtitle">Conectando talentos e oportunidades</p>
            </div>

            <!-- Formulário de Login -->
            <form action="./auth/login.php" method="POST" id="loginForm" class="login-form" novalidate>
                <!-- Campo de Email/Usuário -->
                <div class="form-group">
                    <label for="email">
                        <i class="fas fa-envelope"></i>
                        E-mail ou Usuário
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Digite seu e-mail ou usuário"
                        required
                        autocomplete="username"
                    >
                    <span class="error-message" id="emailError"></span>
                </div>

                <!-- Campo de Senha -->
                <div class="form-group">
                    <label for="password">
                        <i class="fas fa-lock"></i>
                        Senha
                    </label>
                    <div class="password-wrapper">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Digite sua senha"
                            required
                            autocomplete="current-password"
                        >
                        <button type="button" class="toggle-password" id="togglePassword">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <span style="color: #eb3b3b;">
                    <?php if (isset($_SESSION['error_message'])): ?>
                            <?= $_SESSION['error_message'] ?>
                            <?php unset($_SESSION['error_message']); ?>
                    <?php endif; ?>
                </span>                        
                <!-- Lembrar-me e Esqueceu a senha -->
                <div class="form-options">
                    <label class="checkbox-container">
                        <input type="checkbox" id="rememberMe" name="rememberMe">
                        <span class="checkmark"></span>
                        Lembrar-me
                    </label>
                    <a href="recuperar-senha.html" class="forgot-password">Esqueceu a senha?</a>
                </div>

                <!-- Botão de Login -->
                <button type="submit" class="btn-login">
                    <span>Entrar</span>
                    <i class="fas fa-arrow-right"></i>
                </button>

                <!-- Divisor -->
                <div class="divider">
                    <span>ou</span>
                </div>
                <div class="social-login">
                    <button title="Em produção..." disabled type="button" class="btn-social btn-google">
                        <i class="fab fa-google"></i>
                         Em breve login via Google...
                    </button>
                </div>

                <!-- Link para Cadastro -->
                <div class="signup-link">
                    <p>Não tem uma conta? <a href="views/cadastro-cliente.php">Criar conta</a></p>
                </div>
            </form>
        </div>
    </div>

    <!-- Footer Padrão -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 Talentoo. Todos os direitos reservados.</p>
            <div class="footer-links">
                <a href="termos.html">Termos de Uso</a>
                <span class="separator">|</span>
                <a href="privacidade.html">Política de Privacidade</a>
                <span class="separator">|</span>
                <a href="contato.html">Contato</a>
            </div>
        </div>
    </footer>

    <!-- Link para Home -->
    <div style="text-align: center; margin-top: 1rem;">
        <a href="home.html" style="color: var(--secondary-color); text-decoration: none; font-weight: 600;">
            <i class="fas fa-arrow-left"></i> Voltar para Home
        </a>
    </div>

    <!-- JavaScript -->
    <script src="js/navbar.js"></script>
    <script src="js/ux.js"></script>
    <script src="js/login.js"></script>
</body>
</html>