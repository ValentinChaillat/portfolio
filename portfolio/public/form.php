<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']))
	{
	echo json_encode(["sent" => false]);
	}

	else{
	// set response code - 200 OK

	http_response_code(200);
	$subject = "Portfolio: message de " . $_POST['name'];
	$to = "valentin.chaillat@outlook.fr";
	$from = $_POST['email'];

	// data

	$msg  = '<p><b>nom: </b>'. $_POST['name'] . "</p>" ;
	$msg .=	'<p><b>Email: </b> ' .$_POST['email'] . "</p>"; 
	$msg .=	'<p><b>message: </b> '.$_POST['message'] . "</p>";
	

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));

	}
  



?>

