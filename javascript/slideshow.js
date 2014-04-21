// JavaScript Document

//--------------- slideshow property -------------


var image = document.getElementById("slideshow");

var imageArray = ["images/slideshow1.jpg",
				  "images/slideshow2.jpg",
				  "images/slideshow3.jpg",
				  "images/slideshow4.jpg",
				  "images/slideshow5.jpg",
				  "images/slideshow6.jpg",
				  "images/slideshow7.jpg"]

var imageIndex = 0;

document.getElementById("slider_message").innerHTML = "Slideshow playing automatically";

var play = document.getElementById("slider_message");
			   play.setAttribute("style", "color: #818181;");


function slider_show()
	{
		image.setAttribute("src",imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) 
			{
				imageIndex = 0;
			}	
	}

// setInterval is also in milliseconds
var time = setInterval(slider_show,5000);


function slide_stop()
	{
		clearInterval(time);
		document.getElementById("slider_message").innerHTML = "Slideshow paused";
		var stopped = document.getElementById("slider_message");
		stopped.setAttribute("style", "color: #C20008;");
	}
	
	
function slide_start() 
	{
		time = setInterval(slider_show,5000);
		document.getElementById("slider_message").innerHTML = "Slideshow playing";
		play.setAttribute("style", "color: #ffffff;");
	}


/*	
function slide_1()
	{
		image.setAttribute("src",imageArray[0]);
	}

function slide_2()
	{
		image.setAttribute("src",imageArray[1]);
	}

function slide_3()
	{
		image.setAttribute("src",imageArray[2]);
		
	}

function slide_4()
	{
		image.setAttribute("src",imageArray[3]);
	}

function slide_5()
	{
		image.setAttribute("src",imageArray[4]);
	}
	*/

	
