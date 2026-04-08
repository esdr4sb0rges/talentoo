<?php
session_start();
// A função isset() verifica se uma variável está definida e não é null. Garante que o formulário enviou os campos esperados 
if(isset($_POST['email'], $_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])) {
  require_once '../config/db.php';
  require_once '../includes/Users.class.php';

  $u = new Users();

  $email = $_POST['email'];
  $password = $_POST['password'];

  if($u->login($email, $password)) {
    header("Location: ../home.html");
    exit;
  } else {
    $_SESSION['error_message'] = "E-mail/Usuário ou Senha incorretos. Tente novamente.";

    header("Location: ../index.php");
    exit;
  }
} else {
  $_SESSION['error_message'] = "Por favor, preencha todos os campos.";
  header("Location: ../index.php");
  exit;
}
?>