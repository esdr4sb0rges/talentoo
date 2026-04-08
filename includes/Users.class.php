<?php
session_start();
class Users {
    public function login($email, $password) {
        global $pdo;

        $query = "SELECT id, senha_hash FROM usuarios WHERE email = :email";
        $sql = $pdo->prepare($query);
        $sql->bindValue("email", $email);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $infoUser = $sql->fetch(PDO::FETCH_ASSOC);

            if (password_verify($password, $infoUser['senha_hash'])) {
                $_SESSION['id_user'] = $infoUser['id'];
                return true;
            } else {
                return false;
            }
        } else {
            // Usuário não encontrado
            return false;
        }
    }

    public function registerClient($name, $email, $phoneNumber, $city, $password) {
        global $pdo;

        // 1. Verifica se o e-mail já existe
        $check = $pdo->prepare("SELECT id FROM usuarios WHERE email = :email");
        $check->bindValue("email", $email);
        $check->execute();

        if ($check->rowCount() > 0) {
            // E-mail já cadastrado
            return false; 
        }

        $senha_hash = password_hash($password, PASSWORD_DEFAULT);

        $query = "INSERT INTO usuarios (nome_completo, email, senha_hash, tipo_usuario, cidade, telefone) VALUES (:nome, :email, :senha_hash, :tipo_usuario, :cidade, :telefone)";
        $sql = $pdo->prepare($query);
        $sql->bindValue("nome", $name);
        $sql->bindValue("email", $email);
        $sql->bindValue("senha_hash", $senha_hash);
        $sql->bindValue("tipo_usuario", "cliente");
        $sql->bindValue("cidade", $city);
        $sql->bindValue("telefone", $phoneNumber);

        try {
            return $sql->execute();
        } catch (PDOException $error) {
            echo $error->getMessage(); 
            return false;
        }
    }

    public function registerProfessional($name, $email, $phoneNumber, $profession, $serviceCategory, $yearsExperience, $city, $password, $bio) {
        global $pdo;

        // 1. Verifica se o e-mail já existe
        $check = $pdo->prepare("SELECT id FROM usuarios WHERE email = :email");
        $check->bindValue("email", $email);
        $check->execute();

        if ($check->rowCount() > 0) {
            // E-mail já cadastrado
            return false; 
        }

        $senha_hash = password_hash($password, PASSWORD_DEFAULT);

        // Inicia a transação
        $pdo->beginTransaction();

        try {
            // 2. INSERÇÃO NA TABELA 'usuarios'
            $query_user = "INSERT INTO usuarios (nome_completo, email, senha_hash, tipo_usuario, cidade, telefone) 
                           VALUES (:nome, :email, :senha_hash, :tipo_usuario, :cidade, :telefone)";
            $sql_user = $pdo->prepare($query_user);
            $sql_user->bindValue("nome", $name);
            $sql_user->bindValue("email", $email);
            $sql_user->bindValue("senha_hash", $senha_hash);
            $sql_user->bindValue("tipo_usuario", "profissional"); // Corrigido para 'funcionario'
            $sql_user->bindValue("cidade", $city);
            $sql_user->bindValue("telefone", $phoneNumber);
            
            if (!$sql_user->execute()) {
                $pdo->rollBack();
                return false;
            }

            // Obtém o ID do usuário recém-inserido
            $id_usuario = $pdo->lastInsertId();

            // 3. INSERÇÃO NA TABELA 'funcionario'
            $query_prof = "INSERT INTO profissionais (id_usuario, categoria_servico, profissao, anos_experiencia, biografia) 
                           VALUES (:id_usuario, :categoria_servico, :profissao, :anos_experiencia, :biografia)";
            $sql_prof = $pdo->prepare($query_prof);
            $sql_prof->bindValue("id_usuario", $id_usuario);
            $sql_prof->bindValue("categoria_servico", $serviceCategory);
            $sql_prof->bindValue("profissao", $profession);
            $sql_prof->bindValue("anos_experiencia", $yearsExperience);
            $sql_prof->bindValue("biografia", $bio);
            
            if (!$sql_prof->execute()) {
                $pdo->rollBack();
                return false;
            }

            // Confirma a transação
            $pdo->commit();
            return true;

        } catch (PDOException $error) {
            $pdo->rollBack();
            // Em ambiente de produção, você deve logar o erro e não exibi-lo
            // echo $error->getMessage(); 
            return false;
        }
    }
}