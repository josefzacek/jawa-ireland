// JavaScript Document

// onsubmit validation
function validate_form()
{
	var name=document.getElementById("name").value
	var name_pattern = /^[A-Za-z ]*[A-Za-z]+$/;
	var name_length = name.length;
	
	if(name_pattern.test(name) && name_length >= 5)
	{         
		  var email=document.getElementById("email").value
		  var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		  var email_length = email.length;
		  
		  if(email_pattern.test(email) && email_length >= 5)
		  {         
				var phone=document.getElementById("phone").value
				var phone_pattern = /^[\d\s]+$/
				var phone_length = phone.length;
				
				if(phone_pattern.test(phone) && phone_length >= 8 && phone_length <= 15)
				{         
						var text_area=document.getElementById("text_area").value
						var text_area_length = text_area.length;
				
						if(text_area_length >= 15)
						{         
						return true;   
						}
						else
						{   
							alert("Your mesage must be at least 15 chracters!"); 
							return false;
						}    
				}
				else
				{   
					alert("Phone number must be between 8 - 15 numbers only.!"); 
					return false;
				} 
		  }
		  else
		  {   
			  alert("Please provide valid e-mail address, minimum 5 characters!"); 
			  return false;
		  }   
	}
	else
	{   
		alert("Yor name must contain minimum 5 letters!"); 
		return false;
	}
		
}

// name_field properties
function name_focus()
	{
	document.getElementById("name_message").innerHTML="Only letters are allowed, minimum 5.";
	}

function name_blur()
	{	
		var letter_pattern = /^[A-Za-z ]*[A-Za-z]+$/;
		var name = document.getElementById("name").value;
		var name_field = document.getElementById("name");
		var name_length = name.length;
		
		if(name.match(letter_pattern) && name_length >= 5)
			{
				document.getElementById("name_message").innerHTML = "Name accepted ";
				name_message.style.color = "#ffffff";
				name_field.style.backgroundColor = "#ffffff";
				//return true;
			}
		else
			{
				document.getElementById("name_message").innerHTML = "Please enter minimum 5 letters only!";
				name_message.style.color = "#c20008";
				name_field.style.backgroundColor = "#c20008";
				return false;
			}
	};
	

// email_field properties
function email_focus()
	{
	document.getElementById("email_message").innerHTML = "Please enter valid email address, minimum 5 characters";
	}

function email_blur()
	{	
		var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var email = document.getElementById("email").value;
		var email_field = document.getElementById("email");
		var email_length = email.length;
		
		if(email.match(email_pattern) && email_length >= 5)
			{
				document.getElementById("email_message").innerHTML = "Email address accepted";
				email_message.style.color = "#ffffff";
				email_field.style.backgroundColor = "#ffffff";
				return true;
			}
		else
			{
				document.getElementById("email_message").innerHTML = "Email address not valid!";
				email_message.style.color = "#c20008";
				email_field.style.backgroundColor = "#c20008";
				return false;
			}	
	};
	
	
// phone_field properties
function phone_focus()
	{
	document.getElementById("phone_message").innerHTML="Only numbers are allowed. Minimum 8 characters, maximum 15 characters .";
	}

function phone_blur()
	{	
		var phone_pattern = /^[\d\s]+$/;
		var phone = document.getElementById("phone").value;
		var phone_field = document.getElementById("phone");
		var phone_length = phone.length;
		
		if(phone.match(phone_pattern) && phone_length >= 8 && phone_length <= 15 )
			{
				document.getElementById("phone_message").innerHTML = "Phone number accepted";
				phone_message.style.color = "#ffffff";
				phone_field.style.backgroundColor = "#ffffff";
				return true;
			}
		else
			{
				document.getElementById("phone_message").innerHTML = "Please enter phone number. Minimum 8 characters, maximum 15 characters!";
				phone_message.style.color = "#c20008";
				phone_field.style.backgroundColor = "#c20008";
				return false;
			}
	};
	
	
// text_area_field properties	
function text_area_focus()
	{
	document.getElementById("text_area_message").innerHTML = "Please enter message. Minimum 15 characters.";
	}

function text_area_blur()
	{	
		var text_area = document.getElementById("text_area").value;
		var text_area_field = document.getElementById("text_area");
		var text_area_length = text_area.length;
		
		if(text_area_length >= 15)
			{
				document.getElementById("text_area_message").innerHTML = "Message accepted";
				text_area_message.style.color = "#ffffff";
				text_area_field.style.backgroundColor = "#ffffff";
				return true;
			}
		else
			{
				document.getElementById("text_area_message").innerHTML = "You did not fill message field! Minimum 15 characters!";
				text_area_message.style.color = "#c20008";
				text_area_field.style.backgroundColor = "#c20008";
				return false;
			}
	};
	

