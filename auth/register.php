<?php
require_once '../config/db.php';
require_once '../includes/Users.class.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['userType']) && $_POST['userType'] == 'cliente') {
    if (
        (isset($_POST['name'], $_POST['email'], $_POST['password'], $_POST['city'], $_POST['phoneNumber']) && 
        !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['city']) && !empty($_POST['phoneNumber']))
    ) {
        // 1. LIMPEZA E OBTENÇÃO DOS DADOS
        // É importante limpar os dados!
        $nome = trim(htmlspecialchars($_POST['name']));
        $email = trim(htmlspecialchars($_POST['email']));
        $password = $_POST['password']; // Senha bruta. NÃO limpe (remova caracteres) a senha!
        $phoneNumber = trim(htmlspecialchars($_POST['phoneNumber']));
        $city = trim(htmlspecialchars($_POST['city']));
    
        $u = new Users();
    
        $result = $u->registerClient($nome, $email, $phoneNumber, $city, $password);
        if ($result === true) {
            // Sucesso: Redireciona para login ou home
            $_SESSION['success_message'] = "Cadastro realizado com sucesso! Faça login.";
            header("Location: ../home.html"); 
            exit;
        } else {
                $errorMessage = "O e-mail informado já está em uso. Por favor, utilize outro e-mail.";
                $_SESSION['error_message'] = $errorMessage;
                header("Location: ../views/cadastro-cliente.php"); 
                exit;
        }
    } else {
        // Campos vazios
        $_SESSION['error_message'] = "Por favor, preencha todos os campos.";
        header("Location: ../views/cadastro-cliente.php"); 
        exit;
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['userType']) && $_POST['userType'] == 'profissional') {
	    if (
	        (isset($_POST['name'], $_POST['email'], $_POST['password'], $_POST['city'], $_POST['phoneNumber'], $_POST['profession'], $_POST['serviceCategory'], $_POST['experience']) && 
	        !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['city']) && !empty($_POST['phoneNumber']) && !empty($_POST['profession']) && !empty($_POST['serviceCategory']) && !empty($_POST['experience']))
	    ) {
	        // 1. LIMPEZA E OBTENÇÃO DOS DADOS
	        $nome = trim(htmlspecialchars($_POST['name']));
	        $email = trim(htmlspecialchars($_POST['email']));
	        $password = $_POST['password'];
	        $phoneNumber = trim(htmlspecialchars($_POST['phoneNumber']));
	        $city = trim(htmlspecialchars($_POST['city']));
	        $profession = trim(htmlspecialchars($_POST['profession']));
	        $serviceCategory = trim(htmlspecialchars($_POST['serviceCategory']));
	        $experience = trim(htmlspecialchars($_POST['experience']));
	        $bio = isset($_POST['bio']) ? trim(htmlspecialchars($_POST['bio'])) : ''; // Campo opcional
	    
	        $u = new Users();
	    
	        // 2. CHAMA O MÉTODO registerProfessional() na classe Users (o Model)
	        $result = $u->registerProfessional($nome, $email, $phoneNumber, $profession, $serviceCategory, $experience, $city, $password, $bio);
	        
	        if ($result === true) {
	            // Sucesso: Redireciona para login ou home
	            $_SESSION['success_message'] = "Cadastro realizado com sucesso! Faça login.";
	            header("Location: ../home.html"); 
	            exit;
	        } else {
	            // Falha no registro
	            $errorMessage = "Erro ao realizar o cadastro. Tente novamente.";
	            if ($result === false) {
	                $errorMessage = "O e-mail informado já está em uso. Por favor, utilize outro e-mail.";
	            }
	            $_SESSION['error_message'] = $errorMessage;
	            header("Location: ../views/cadastro-profissional.php"); 
	            exit;
	        }
	    } else {
	        // Campos vazios
	        $_SESSION['error_message'] = "Por favor, preencha todos os campos obrigatórios.";
	        header("Location: ../views/cadastro-profissional.php"); 
	        exit;
	    }
	}
	?>