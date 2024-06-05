<?php

$name = $_POST['';]
$visitor_email = $_POST['';]
$subject = $_POST['';]
$message = $_POST['';]



$email_from = 'http://127.0.0.1:5500/';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "subject: $subject.\n".
                "User Message: $message.\n";

$to = 'franknemb1@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r \n";

mail($to, $email_subject, $email_body, $headers);

header("location: contact.html");

?>