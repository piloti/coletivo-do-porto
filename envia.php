<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './includes/PHPMailer-6.0.0/src/Exception.php';
require './includes/PHPMailer-6.0.0/src/PHPMailer.php';
require './includes/PHPMailer-6.0.0/src/SMTP.php';

if($_POST){
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$assunto = $_POST['assunto'];
	$msg = $_POST['mensagem'];

	// if ($nome != '') {
	// 	if ($email != '') {
	// 		if (preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/',$mensagem)) {
	// 			if ($assunto != '') {
	// 				if ($mensagem != '') {
						// Instanciando novo mailer
						$Email = new PHPMailer();

						// Setando conjunto de caracteres
						$Email->CharSet = 'utf-8';

						// ativando o envio através da função smtp do php
						$Email->IsSMTP();

						// configurando o serviço de smtp
						$Email->SMTPAuth = true;
						$Email->Host = "smtp.gmail.com";
						$Email->Port = "465";
						$Email->Username = "noreply@piloti.com.br";
						$Email->Password = "Pil@ti0708!";
						$Email->SMTPSecure = 'ssl';


						// ativa o envio de e-mails em HTML
						$Email->IsHTML(true);

						// setando remetente do e-mail
						$Email->SetFrom('noreply@piloti.com.br', 'Contato piloti');

						// setando destinatário do e-mail
						$Email->AddAddress("contato@piloti.com.br");

						// setando assunto do e-mail
						$Email->Subject = "Contato via site: ".$assunto;

						// definindo o corpo do e-mail
						$Email->Body .= "<strong>Mensagem enviada pelo site.</strong><br/><br/>";
						$Email->Body .= "<strong>De:</strong> $nome ($email)<br/><br/>";
						$Email->Body .= "<strong>Assunto:</strong> $assunto<br/><br/>";
						$Email->Body .= "<strong>Mensagem:</strong> $msg";

						// verificação final
						if(!$Email->Send()){
							echo "A mensagem não foi enviada.<br/><br/>";
							echo "Erro: " . $Email->ErrorInfo;
						}else{
							echo "<script>alert('E-mail enviado com sucesso!');</script>";
							header("Location:index.php");
							 
						}
	// 				} else {
	// 					header("Location:contato.php");
	// 					alert("A mensagem é um campo obrigatório.");
	// 				}
	// 			} else {
	// 				header("Location:contato.php");
	// 				alert("O assunto é um campo obrigatório.");
	// 			}
	// 		} else {
	// 			header("Location:contato.php");
	// 			alert("Insira um e-mail válido.");
	// 		}
	// 	} else {
	// 		header("Location:contato.php");
	// 		alert("O e-mail é um campo obrigatório.");
	// 	}
	// } else {
	// 	alert("O nome é um campo obrigatório.");
	// 	header("Location:contato.php");
	// }
}

?>