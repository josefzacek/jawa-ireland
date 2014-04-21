<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['textarea']))
	{	
		/* Data Variables */
		$name = htmlentities($_POST['name']);
		$email = htmlentities($_POST['email']);
		$phone = htmlentities($_POST['phone']);
		$message = htmlentities($_POST['textarea']);
		
		
		/// obtaining IP address////
		$ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
		
	
		
		if(!empty($name) && !empty($email) && !empty($message))
			{
			$to ="joezacek@gmail.com";
			$subject = "JAWAIRELAND - PHP FORM";
			$body = "Name....................................................... ".$name 
					."\n"."Email................................................ ".$email 
					."\n"."Phone................................................ ".$phone
					."\n"."Message.............................................. ".$message
					."\n"."IP address .......................................... ".$ip;
			$headers = "From............ ".$email;	
			
			 @mail($to, $subject, $body, $headers);
				 		
			}
			
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
   <title>Thank you</title>
   <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
   
   <meta http-equiv="refresh" content="5; URL=index.html"/>
   
   <meta name="author" content="Josef Zacek" />
   <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
  
   
   <!-- stylesheet -->
   <link rel="stylesheet" type="text/css" href="css/main_stylesheet.css" title = "black"/>
   <link rel="white stylesheet" type="text/css" href="css/white_stylesheet.css" title = "white"/>
   <link rel="print stylesheet" type="text/css" href="css/print_stylesheet.css" media="print" />
 
   
</head>
<body>

<div id="thank_you_content">
<img src="images/jawa-logo.png" alt="jawa logo" width="138" height="80"/>

<p>
	Your message has been sucessfully sent!
</p>
<p>
    You are now being automatically redirected to Homepage. 
</p>
<p><a href="index.html">Home page </a></p>


</div><!-- enf of thank_you_content -->

<script type="text/javascript" src="javascript/cookies.js"></script>
<script type="text/javascript" src="javascript/switcher.js"></script>

</body>
</html>

