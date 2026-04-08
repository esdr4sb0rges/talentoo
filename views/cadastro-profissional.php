<?php
require_once '../config/db.php';
session_start();
// Define o tipo de usuário para o formulário
$userType = 'profissional';
$userTypeTitle = 'Profissional';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cadastre-se como Profissional no Talentoo e encontre novas oportunidades">
    <title>Cadastro Profissional - Talentoo</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/cadastro-base.css">
    <link rel="stylesheet" href="../css/cadastro-profissional.css">
    <link rel="shortcut icon" href="../assets/static/images/talentoo.ico" type="image/x-icon">
</head>
<body>
    <!-- Header/Navbar -->
    <header class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <img src="../assets/static/images/talentoo-logo.png" alt="Logo Talentoo">
            </div>
            <nav class="navbar-menu">
                <a href="home.html">Home</a>
                <a href="sobre.html">Sobre</a>
                <a href="buscar.html">Buscar</a>
                <a href="../index.php" class="btn-nav-login">Entrar</a>
            </nav>
            <button class="navbar-toggle" id="navbarToggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Container Principal -->
    <div class="signup-container">
        <!-- Card de Cadastro -->
        <div class="signup-card">
            <!-- Cabeçalho -->
            <div class="signup-header">
                <div class="logo">
                    <img src="../assets/static/images/talentoo-logo.png" alt="Logo Talentoo">
                </div>
                <p class="subtitle">Crie sua conta como **<?php echo $userTypeTitle; ?>**</p>
            </div>

            <!-- Link para o outro cadastro -->
            <div class="switch-type-link">
                <p>Quer contratar serviços? <a href="cadastro-cliente.php">Cadastre-se como Cliente</a></p>
            </div>

            <!-- Formulário de Cadastro -->
            <form action="../auth/register.php" method="POST" id="signupForm" class="signup-form" novalidate>
                <!-- Campo oculto para tipo de usuário -->
                <input type="hidden" id="userType" name="userType" value="<?php echo $userType; ?>">

                <!-- Nome Completo -->
                <div class="form-group">
                    <label for="fullName">
                        <i class="fas fa-user"></i>
                        Nome Completo
                    </label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="name" 
                        placeholder="Digite seu nome completo"
                        required
                    >
                    <span class="error-message" id="fullNameError"></span>
                </div>

                <div class="form-group">
                    <label for="foto">
                        <i class="fa-solid fa-image" style="color: #6096BA;"></i>
                        Envie sua foto:
                    </label>
                    <input type="file" id="foto" name="foto" accept="image/*">
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email">
                        <i class="fas fa-envelope"></i>
                        E-mail
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="seu@email.com"
                        required
                        autocomplete="email"
                    >
                    <span class="error-message" id="emailError"></span>
                </div>

                <!-- Telefone -->
                <div class="form-group">
                    <label for="phone">
                        <i class="fas fa-phone"></i>
                        Telefone
                    </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phoneNumber" 
                        placeholder="(00) 00000-0000"
                        required
                    >
                    <span class="error-message" id="phoneError"></span>
                </div>

                <!-- Campos específicos para Profissional -->
                <div id="professionalFields">
                    <!-- Profissão -->
                    <div class="form-group">
                        <label for="profession">
                            <i class="fas fa-tools"></i>
                            Profissão
                        </label>
                        <select id="profession" name="profession" required>
                            <option value="">Selecione sua profissão</option>
                            <option value="Eletricista">Eletricista</option>
                            <option value="Mecanico">Mecânico(a)</option>
                            <option value="Pedreiro">Pedreiro(a)</option>
                            <option value="Pintor">Pintor(a)</option>
                            <option value="Carpinteiro">Carpinteiro(a)</option>
                            <option value="Marceneiro">Marceneiro(a)</option>
                            <option value="Encanador">Encanador(a)</option>
                            <option value="Jardineiro">Jardineiro(a)</option>
                            <option value="Serralheiro">Serralheiro(a)</option>
                            <option value="Tecnico Informatica">Técnico(a) em Informática</option>
                            <option value="Tecnico Refrigeracao">Técnico(a) em Refrigeração</option>
                            <option value="Tecnico Eletronica">Técnico(a) em Eletrônica</option>
                            <option value="Montador Moveis">Montador(a) de Móveis</option>
                            <option value="Gesseiro">Gesseiro(a)</option>
                            <option value="Azulejista">Azulejista</option>
                            <option value="Vidraceiro">Vidraceiro(a)</option>
                            <option value="Chaveiro">Chaveiro(a)</option>
                            <option value="Costureiro">Costureiro(a)</option>
                            <option value="Cabeleireiro">Cabeleireiro(a)</option>
                            <option value="Barbeiro">Barbeiro(a)</option>
                            <option value="Manicure">Manicure/Pedicure</option>
                            <option value="Esteticista">Esteticista</option>
                            <option value="Tatuador">Tatuador(a)</option>
                            <option value="Motorista Autonomo">Motorista Autônomo(a)</option>
                            <option value="Motoboy">Motoboy / Entregador(a)</option>
                            <option value="Ferreiro">Ferreiro(a)</option>
                            <option value="Soldador">Soldador(a)</option>
                            <option value="Lanterneiro">Lanterneiro(a)</option>
                            <option value="Instalador Painel Solar">Instalador(a) de Painéis Solares</option>
                            <option value="Cuidador Idosos">Cuidador(a) de Idosos</option>
                            <option value="Baba">Babá / Cuidador(a) Infantil</option>
                            <option value="Diarista">Diarista / Faxineiro(a)</option>
                            <option value="Seguranca">Segurança / Vigia</option>
                            <option value="Garcom">Garçom / Garçonete</option>
                            <option value="Fotografo Autonomo">Fotógrafo(a) Autônomo(a)</option>
                            <option value="Artista Plastico">Artista Plástico(a)</option>
                            <option value="Artesao">Artesão(ã)</option>
                        </select>
                        <span class="error-message" id="professionError"></span>
                    </div>
                    <!-- Categoria -->
                    <div class="form-group">
                        <label for="category">
                            <i class="fas fa-tags"></i>
                            Categoria de Serviço
                        </label>
                        <select id="category" name="serviceCategory" required>
                            <option value="">Selecione uma categoria</option>
                            <option value="construcao">Construção e Reformas</option>
                            <option value="tecnologia">Tecnologia e TI</option>
                            <option value="beleza">Beleza e Estética</option>
                            <option value="saude">Saúde e Bem-estar</option>
                            <option value="educacao">Educação e Ensino</option>
                            <option value="design">Design e Arte</option>
                            <option value="consultoria">Consultoria</option>
                            <option value="manutencao">Manutenção</option>
                            <option value="eventos">Eventos</option>
                            <option value="outros">Outros</option>
                        </select>
                        <span class="error-message" id="categoryError"></span>
                    </div>

                    <!-- Experiência -->
                    <div class="form-group">
                        <label for="experience">
                            <i class="fas fa-clock"></i>
                            Anos de Experiência
                        </label>
                        <select id="experience" name="experience" required>
                            <option value="">Selecione</option>
                            <option value="0-1">Menos de 1 ano</option>
                            <option value="1-3">1 a 3 anos</option>
                            <option value="3-5">3 a 5 anos</option>
                            <option value="5-10">5 a 10 anos</option>
                            <option value="10+">Mais de 10 anos</option>
                        </select>
                        <span class="error-message" id="experienceError"></span>
                    </div>

                    <!-- Biografia / Sobre Mim -->
                    <div class="form-group">
                        <label for="bio">
                            <i class="fas fa-info-circle"></i>
                            Biografia / Sobre Mim
                        </label>
                        <textarea 
                            id="bio" 
                            name="bio" 
                            rows="4" 
                            placeholder="Conte um pouco sobre sua experiência e o que você oferece. (Opcional)"
                        ></textarea>
                        <span class="error-message" id="bioError"></span>
                    </div>
                </div>

                <!-- Localização -->
                <div class="form-group">
                    <label for="locationInput">
                        <i class="fas fa-map-marker-alt"></i>
                        Cidade/Estado
                    </label>
                    <select id="locationInput" name="city" aria-label="Cidade">
                        <option value="">Selecione a cidade</option>
                        <option value="Parauapebas - PA" selected>Parauapebas - PA</option>
                        <option value="Marabá - PA">Curionópolis - PA</option>
                        <option value="Canaã dos Carajás - PA">Canaã dos Carajás - PA</option>
                    </select>
                    <span class="error-message" id="locationError"></span>
                </div>

                <!-- Senha -->
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
                            placeholder="Mínimo 8 caracteres"
                            required
                            autocomplete="new-password"
                        >
                        <button type="button" class="toggle-password" id="togglePassword">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <span class="error-message" id="passwordError"></span>
                </div>

                <!-- Termos e Condições -->
                <div class="form-group">
                    <label class="checkbox-container">
                        <input type="checkbox" id="terms" name="terms" required>
                        <span class="checkmark"></span>
                        Aceito os <a href="termos.html" class="link-inline">Termos de Uso</a> e a <a href="privacidade.html" class="link-inline">Política de Privacidade</a>
                    </label>
                    <span class="error-message" id="termsError"></span>
                </div>
                <span style="color: #eb3b3b;">
                    <?php if (isset($_SESSION['error_message'])) : ?>
                            <?= $_SESSION['error_message'] ?>
                            <?php unset($_SESSION['error_message']); ?>
                    <?php endif; ?>
                </span>      
                <!-- Botão de Cadastro -->
                <button type="submit" class="btn-signup">
                    <span>Criar Conta</span>
                    <i class="fas fa-arrow-right"></i>
                </button>

                <!-- Divisor -->
                <div class="divider">
                    <span>ou cadastre-se com</span>
                </div>

                <!-- Botões de Cadastro Social -->
                <div class="social-signup">
                    <button title="Em produção..." disabled type="button" class="btn-social btn-google">
                        <i class="fab fa-google"></i>
                        Em breve login via Google...
                    </button>
                </div>

                <!-- Link para Login -->
                <div class="login-link">
                    <p>Já tem uma conta? <a href="index.html">Fazer login</a></p>
                </div>
            </form>
        </div>

        <!-- Link para Home -->
        <div class="back-home">
            <a href="home.html">
                <i class="fas fa-arrow-left"></i>
                Voltar para Home
            </a>
        </div>
    </div>

    <!-- Footer -->
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

    <!-- JavaScript -->
    <script src="../js/navbar.js"></script>
    <!-- <script src="../js/ux.js"></script> -->
    <script src="../js/cadastro-profissional.js"></script>
</body>
</html>
