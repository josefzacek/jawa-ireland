// JavaScript Document

var userName;
	if (userName = readCookie("uName")) 
	{
        document.getElementById("visitor_name").innerHTML = "Hello " + userName;
	} 
	else
	{
		userName = window.prompt ("Please enter your name:");
		createCookie("uName", userName, 1);
	}
	
	
	function createCookie(name, value, days)
	{
		var expires;
		if (days) 
		{
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		}
		else
		{
		expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}



	function readCookie(name) 
	{
		var nameEquals = name + "=";
		var cookieArray = document.cookie.split(";");
		for (var i = 0; i < cookieArray.length; i++ )
		{
			var c = cookieArray[i];
			while (c.charAt(0) == " ")
			{
				c = c.substring(1, c.length);
			}
		
			if (c.indexOf(nameEquals) == 0)
			{
				return c.substring(nameEquals.length, c.length);
			}
		}
		return null;
	}


window.onload = function()
{
    var cookie = readCookie ( "style" );
    var title;

    if ( cookie )
    {
        title = cookie;
        setActiveStyleSheet ( title );
    }
}


window.onunload = function()
{
    var title = getActiveStyleSheet();
    createCookie( "style", title, 30 );
}