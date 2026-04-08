// ========================================
// CADASTRO PROFISSIONAL JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // ELEMENTOS DO DOM
    // ========================================
    const signupForm = document.getElementById('signupForm');
    
    // Inputs
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const categoryInput = document.getElementById('category');
    const experienceInput = document.getElementById('experience');
    const locationInput = document.getElementById('locationInput');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    const userTypeInput = document.getElementById('userType'); // Mantido para envio de dados
    
    // Erros
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const categoryError = document.getElementById('categoryError');
    const experienceError = document.getElementById('experienceError');
    const locationError = document.getElementById('locationError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');
    
    // Toggles de senha
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    // ========================================
    // TOGGLE DE SENHA
    // ========================================
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    // ========================================
    // MÁSCARA DE TELEFONE
    // ========================================
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        
        e.target.value = value;
    });

    // ========================================
    // VALIDAÇÃO EM TEMPO REAL
    // ========================================
    
    fullNameInput.addEventListener('blur', validateFullName);
    fullNameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validateFullName();
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validateEmail();
    });

    phoneInput.addEventListener('blur', validatePhone);
    phoneInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validatePhone();
    });

    categoryInput.addEventListener('change', validateCategory);

    experienceInput.addEventListener('change', validateExperience);

    locationInput.addEventListener('blur', validateLocation);
    locationInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validateLocation();
    });

    passwordInput.addEventListener('blur', validatePassword);
    passwordInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validatePassword();
    });

    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    confirmPasswordInput.addEventListener('input', function() {
        if (this.classList.contains('error')) validateConfirmPassword();
    });

    termsCheckbox.addEventListener('change', validateTerms);

    // ========================================
    // FUNÇÕES DE VALIDAÇÃO
    // ========================================
    
    function validateFullName() {
        const value = fullNameInput.value.trim();
        
        if (value === '') {
            showError(fullNameInput, fullNameError, 'Por favor, insira seu nome completo');
            return false;
        }
        
        if (value.split(' ').length < 2) {
            showError(fullNameInput, fullNameError, 'Por favor, insira seu nome e sobrenome');
            return false;
        }
        
        if (value.length < 5) {
            showError(fullNameInput, fullNameError, 'Nome muito curto');
            return false;
        }
        
        hideError(fullNameInput, fullNameError);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(emailInput, emailError, 'Por favor, insira seu e-mail');
            return false;
        }
        
        if (!emailRegex.test(value)) {
            showError(emailInput, emailError, 'Por favor, insira um e-mail válido');
            return false;
        }
        
        hideError(emailInput, emailError);
        return true;
    }

    function validatePhone() {
        const value = phoneInput.value.replace(/\D/g, '');
        
        if (value === '') {
            showError(phoneInput, phoneError, 'Por favor, insira seu telefone');
            return false;
        }
        
        if (value.length < 10) {
            showError(phoneInput, phoneError, 'Telefone inválido');
            return false;
        }
        
        hideError(phoneInput, phoneError);
        return true;
    }

    function validateCategory() {
        const value = categoryInput.value;
        
        if (value === '') {
            showError(categoryInput, categoryError, 'Por favor, selecione uma categoria');
            return false;
        }
        
        hideError(categoryInput, categoryError);
        return true;
    }

    function validateExperience() {
        const value = experienceInput.value;
        
        if (value === '') {
            showError(experienceInput, experienceError, 'Por favor, selecione sua experiência');
            return false;
        }
        
        hideError(experienceInput, experienceError);
        return true;
    }

    function validateLocation() {
        const value = locationInput.value.trim();
        
        if (value === '') {
            showError(locationInput, locationError, 'Por favor, insira sua localização');
            return false;
        }
        
        if (value.length < 3) {
            showError(locationInput, locationError, 'Localização muito curta');
            return false;
        }
        
        hideError(locationInput, locationError);
        return true;
    }

    function validatePassword() {
        const value = passwordInput.value;
        
        if (value === '') {
            showError(passwordInput, passwordError, 'Por favor, insira uma senha');
            return false;
        }
        
        if (value.length < 8) {
            showError(passwordInput, passwordError, 'A senha deve ter pelo menos 8 caracteres');
            return false;
        }
        
        // Verifica se tem letra e número
        if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
            showError(passwordInput, passwordError, 'A senha deve conter letras e números');
            return false;
        }
        
        hideError(passwordInput, passwordError);
        return true;
    }

    function validateConfirmPassword() {
        const value = confirmPasswordInput.value;
        const passwordValue = passwordInput.value;
        
        if (value === '') {
            showError(confirmPasswordInput, confirmPasswordError, 'Por favor, confirme sua senha');
            return false;
        }
        
        if (value !== passwordValue) {
            showError(confirmPasswordInput, confirmPasswordError, 'As senhas não coincidem');
            return false;
        }
        
        hideError(confirmPasswordInput, confirmPasswordError);
        return true;
    }

    function validateTerms() {
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, termsError, 'Você deve aceitar os termos para continuar');
            return false;
        }
        
        hideError(termsCheckbox, termsError);
        return true;
    }

    function showError(input, errorElement, message) {
        // Se o input for um checkbox, a classe de erro vai para o container pai
        const targetElement = input.type === 'checkbox' ? input.closest('.checkbox-container') : input;
        
        if (targetElement) {
            targetElement.classList.add('error');
        }
        
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function hideError(input, errorElement) {
        const targetElement = input.type === 'checkbox' ? input.closest('.checkbox-container') : input;
        
        if (targetElement) {
            targetElement.classList.remove('error');
        }
        
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    // ========================================
    // SUBMISSÃO DO FORMULÁRIO
    // ========================================
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valida todos os campos
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isCategoryValid = validateCategory();
        const isExperienceValid = validateExperience();
        const isLocationValid = validateLocation();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isTermsValid = validateTerms();
        
        // Se todos os campos forem válidos, processa o cadastro
        if (isFullNameValid && isEmailValid && isPhoneValid && isCategoryValid && 
            isExperienceValid && isLocationValid && isPasswordValid && 
            isConfirmPasswordValid && isTermsValid) {
            processSignup();
        } else {
            // Scroll para o primeiro erro
            const firstError = document.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    function processSignup() {
    const btnSignup = signupForm.querySelector('.btn-signup');
    const btnText = btnSignup.querySelector('span');
    const btnIcon = btnSignup.querySelector('i');

    btnText.textContent = 'Criando conta...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    btnSignup.disabled = true;

    signupForm.submit();
}
        
        // Feedback visual
        const btnSignup = signupForm.querySelector('.btn-signup');
        const btnText = btnSignup.querySelector('span');
        const btnIcon = btnSignup.querySelector('i');
        
        btnText.textContent = 'Criando conta...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        btnSignup.disabled = true;
        
        // SIMULAÇÃO
        setTimeout(() => {
            console.log('Dados de cadastro (Profissional):', signupData);
            
            alert('Cadastro de Profissional simulado com sucesso!\n\nEm produção, você seria redirecionado para confirmar seu e-mail.');
            
            // Restaura botão
            btnText.textContent = 'Criar Conta';
            btnIcon.className = 'fas fa-arrow-right';
            btnSignup.disabled = false;
            
            // Em produção:
            // window.location.href = '/confirmacao-email';
        }, 1500);
    }

    // ========================================
    // LOGIN SOCIAL
    // ========================================
    
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('btn-google') ? 'Google' : 'Facebook';
            
            console.log(`Cadastro com ${provider} clicado`);
            alert(`Cadastro social com ${provider} será implementado quando conectar ao backend.`);
        });
    });
});
