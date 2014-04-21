// JavaScript Document

//------------------ date and time -------------------------------
function showDate()
{
	var now = new Date();
	var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var months = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	
	function fourdigits(number)
	{
	  return (number < 1000) ? number + 1900 : number;
	}
	
	tnow=new Date();
	thour=now.getHours();
	tmin=now.getMinutes();
	tsec=now.getSeconds();
	
	if (tmin<=9) { tmin="0"+tmin; }
	if (tsec<=9) { tsec="0"+tsec; }
	if (thour<10) { thour="0"+thour; }
	
	today = "<span class =\"red\"> Today is:</span> <br />" + days[now.getDay()] +  " <br /> " + date + "/" + months[now.getMonth()] + "/" + (fourdigits(now.getYear())) + " <br /> <span class =\"red\">Time:</span> <br /> " + thour + ":" + tmin +":"+ tsec;
	document.getElementById("dateDiv").innerHTML = today;
}
setInterval("showDate()", 500);



// -------------------------- print page properties ------------------------------//
function printpage()
{
	window.print();
}