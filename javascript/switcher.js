
var black_style = document.getElementById("black");
var white_style = document.getElementById("white");


function setActiveStyleSheet( styleId ) 
{

	 var i = 0;
	 var linkItem, linkArray;
	 
     linkArray = document.getElementsByTagName("link");

		for(i= 0 ; i < linkArray.length; i++)
		{
			linkItem = linkArray[i];
	 
		if ( linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title"))
			{
			linkItem.disabled = true;
				if (linkItem.getAttribute("title") === styleId ) 
				{
					linkItem.disabled = false;
				}
			}	
		}
}


function getActiveStyleSheet()
{

    var i = 0;
    var linkItem, linkArray;

    linkArray = document.getElementsByTagName( "link" );

        for ( i = 0; i < linkArray.length; i++ )
        {
            linkItem = linkArray[i];

        if ( linkItem.getAttribute( "rel" ).indexOf( "style" ) != -1 && linkItem.getAttribute( "title" ) && !linkItem.disabled )
            {
                return linkItem.getAttribute( "title" );
            }
        }
    return null;
}



	
black_style.onclick = function()
{
    setActiveStyleSheet( this.id );
};

white_style.onclick = function()
{
    setActiveStyleSheet( this.id );
};




