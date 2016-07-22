<?php
$errors = '';
$myemail = 'contact@visionaries777.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
	echo $errors;
	return;
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email_address\n Message: $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
if(mail($to,$email_subject,$email_body,$headers)){
	echo "sent";
}else{
	echo "fail";
}
//redirect to the 'thank you' page
//header('Location: ./automotive.html');
?>