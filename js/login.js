// ========================================
// TALENTOO - LOGIN JAVASCRIPT
// ========================================

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // ELEMENTOS DO DOM
    // ========================================
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const btnLogin = loginForm.querySelector('.btn-login'); // Assumindo que o botão tem a classe .btn-login
    
    // Configurações do botão de login para feedback visual
    const btnText = btnLogin ? btnLogin.querySelector('span') : null;
    const btnIcon = btnLogin ? btnLogin.querySelector('i') : null;
    
    const originalBtnText = btnText ? btnText.textContent : 'Entrar';
    const originalBtnIconClass = btnIcon ? btnIcon.className : 'fas fa-arrow-right';


    // ========================================
    // TOGGLE DE VISUALIZAÇÃO DE SENHA
    // ========================================
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alterna o ícone
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    }

    // ========================================
    // VALIDAÇÃO EM TEMPO REAL
    // ========================================
    
    // Validação do campo de email/usuário
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateEmail();
        }
    });

    // Validação do campo de senha
    passwordInput.addEventListener('blur', function() {
        validatePassword();
    });

    passwordInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validatePassword();
        }
    });

    // ========================================
    // FUNÇÕES DE VALIDAÇÃO
    // ========================================
    
    /**
     * Valida o campo de email/usuário
     * @returns {boolean} - Retorna true se válido, false se inválido
     */
    function validateEmail() {
        const value = emailInput.value.trim();
        
        if (value === '') {
            showError(emailInput, emailError, 'Por favor, insira seu e-mail ou usuário');
            return false;
        }
        
        // Verifica se é um email válido (formato básico)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.includes('@') && !emailRegex.test(value)) {
            showError(emailInput, emailError, 'Por favor, insira um e-mail válido');
            return false;
        }
        
        // Verifica comprimento mínimo para usuário
        if (!value.includes('@') && value.length < 3) {
            showError(emailInput, emailError, 'O usuário deve ter pelo menos 3 caracteres');
            return false;
        }
        
        hideError(emailInput, emailError);
        return true;
    }

    /**
     * Valida o campo de senha
     * @returns {boolean} - Retorna true se válido, false se inválido
     */
    function validatePassword() {
        const value = passwordInput.value;
        
        if (value === '') {
            showError(passwordInput, passwordError, 'Por favor, insira sua senha');
            return false;
        }
        
        if (value.length < 6) {
            showError(passwordInput, passwordError, 'A senha deve ter pelo menos 6 caracteres');
            return false;
        }
        
        hideError(passwordInput, passwordError);
        return true;
    }

    /**
     * Exibe mensagem de erro no campo
     * @param {HTMLElement} input - Campo de input
     * @param {HTMLElement} errorElement - Elemento de mensagem de erro
     * @param {string} message - Mensagem de erro
     */
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    /**
     * Oculta mensagem de erro do campo
     * @param {HTMLElement} input - Campo de input
     * @param {HTMLElement} errorElement - Elemento de mensagem de erro
     */
    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    // ========================================
    // SUBMISSÃO DO FORMULÁRIO
    // ========================================
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valida todos os campos
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        // Se todos os campos forem válidos, processa o login
        if (isEmailValid && isPasswordValid) {
            processLogin();
        }
    });

    /**
     * Processa o login do usuário usando um arquivo JSON (PROTÓTIPO ESTÁTICO)
     * * ⚠️ ATENÇÃO: Essa implementação é insegura e deve ser usada APENAS para protótipos
     * estáticos. Para produção, use o método comentado com BACKEND e HTTPS.
     */
    async function processLogin() {
    if (btnLogin) {
        btnText.textContent = 'Verificando...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        btnLogin.disabled = true;
    }
    loginForm.submit();
}
        
        // Exibe feedback visual (botão de loading)
        if (btnLogin) {
            btnText.textContent = 'Verificando...';
            btnIcon.className = 'fas fa-spinner fa-spin';
            btnLogin.disabled = true;
        }

        // Limpa erros anteriores
        hideError(emailInput, emailError);
        hideError(passwordInput, passwordError);
        
        try {
            // 1. Busca o arquivo JSON de usuários (assumindo que está na raiz)
            const response = await fetch('/usuarios.json');
            
            if (!response.ok) {
                // Se o arquivo JSON não for encontrado, lança um erro
                throw new Error('Arquivo de credenciais (JSON) não encontrado ou inacessível.');
            }

            const data = await response.json();
            
            // 2. Procura pelo usuário no JSON
            const usuarioEncontrado = data.usuarios.find(user => 
                // Compara 'email' ou 'usuario' digitado com o campo 'usuario' do JSON
                (user.usuario.toLowerCase() === loginData.usuario.toLowerCase()) && 
                user.senha === loginData.senha
            );

            // 3. Validação
            if (usuarioEncontrado) {
                // SUCESSO
                console.log('Login bem-sucedido para:', usuarioEncontrado.usuario);
                
                // Simulação de token para fins de protótipo
                const token = 'PROTÓTIPO_TOKEN_' + Math.random().toString(36).substring(2, 15);
                if (loginData.rememberMe) {
                    localStorage.setItem('authToken', token);
                } else {
                    sessionStorage.setItem('authToken', token);
                }
                
                // Redireciona para a página principal (ajuste o caminho se o nome for diferente)
                alert(`Login bem-sucedido! Redirecionando para a home.`);
                window.location.href = 'home.html'; 

            } else {
                // FALHA
                showError(passwordInput, passwordError, 'E-mail ou senha incorretos.');
            }

        } catch (error) {
            console.error('Erro no processamento do login:', error.message);
            showError(passwordInput, passwordError, 'Erro ao conectar com a fonte de dados do protótipo. Verifique se o "usuarios.json" existe.');

        } finally {
             // 4. Restaura o botão (em caso de falha ou erro)
             if (btnLogin && window.location.href.includes('login.html')) {
                btnText.textContent = originalBtnText;
                btnIcon.className = originalBtnIconClass;
                btnLogin.disabled = false;
            }
        }
    }


    // ========================================
    // LOGIN SOCIAL (Google e Facebook)
    // ========================================
    
    // ... O restante do código para Login Social, Esqueceu a Senha, Criar Conta, etc. permanece inalterado.
    // ... (incluindo as partes que você copiou, como o loop `socialButtons.forEach`)
    
    // ========================================
    // VERIFICAÇÃO DE SESSÃO EXISTENTE
    // ========================================
    
    /**
     * Verifica se já existe uma sessão ativa (Token de Protótipo)
     */
    function checkExistingSession() {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        
        if (token && window.location.href.includes('login.html')) {
            console.log('Token de protótipo encontrado. Redirecionando...');
            // window.location.href = '/dashboard'; // Descomente e ajuste para o nome da sua página
        }
    }
    
    // Verifica sessão ao carregar a página
    checkExistingSession();

    // ========================================
    // O RESTANTE DO SEU CÓDIGO ORIGINAL CONTINUA AQUI
    // ========================================
    
    // Exemplo de como o resto do seu código estaria aqui:
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('btn-google') ? 'Google' : 'Facebook';
            console.log(`Login com ${provider} clicado`);
            alert(`Login social com ${provider} será implementado quando conectar ao backend.\n\nVocê precisará configurar OAuth 2.0 para ${provider}.`);
        });
    });

    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        const userEmail = prompt('Digite seu e-mail para recuperação de senha:');
        
        if (userEmail && userEmail.includes('@')) {
            console.log('Recuperação de senha solicitada para:', userEmail);
            alert('Em produção, um e-mail de recuperação seria enviado para: ' + userEmail);
        }
    });

    const signupLink = document.querySelector('.signup-link a');
    
    // if (signupLink) {
    //     signupLink.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         alert('Redirecionando para página de cadastro...\n\nEm produção, você será levado para o formulário de registro.');
    //     });
    // }
    
    // ========================================
    // ACESSIBILIDADE - NAVEGAÇÃO POR TECLADO
    // ========================================
    
    // Permite submit com Enter em qualquer campo
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });
    });

    // ========================================
    // ANIMAÇÕES E FEEDBACK VISUAL
    // ========================================
    
    // Adiciona efeito de foco nos inputs
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // ========================================
    // LOGS DE DESENVOLVIMENTO
    // ========================================
    
    console.log('🚀 Talentoo Login - Sistema inicializado');
    console.log('📝 Formulário de login carregado e pronto para uso');
    console.log('⚠️  Lembre-se: Este é apenas o frontend. Conecte ao backend para funcionalidade completa.');
});

function handleSucefulLogin(btnLogin,btnLogin, btnText) {
    hideError(emailInput, emailError);
}