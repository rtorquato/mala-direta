<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$nome_completo = $_POST['nome_completo'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$aceiteContato = $_POST['aceiteContato'];

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'rtorquato.santos@gmail.com';  
    $mail->Password   = 'vnlmvzgkjfghxerv';
    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->Port       = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet    = 'UTF-8';

    //Recipients
    
    $mail->setFrom('rtorquato.santos@gmail.com', 'Ricardo');
    
    // E-mails do cliente 
    
    $mail->addAddress('rtorquato.santos@gmail.com');
    $mail->addAddress('brevvi@momapro.com.br');

    // // $mail->addBCC('bcc@example.com');
    // $mail->addReplyTo('info@example.com', 'Information');
    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Contato - teste';

    $mail->Body     = '<b>Dados do Lead</b><br />';
    $mail->Body    .= '<b>Nome:</b> '.$nome_completo.'<br />';
    $mail->Body    .= '<b>Telefone:</b> '.$tel.'<br />';
    $mail->Body    .= '<b>E-mail do Cliente:</b> '.$email.'<br />';
    $mail->Body    .= '<b>Aceita que um consultor entre em contato..:</b> '.$aceiteContato.'<br />';
    

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}