//Initialise some variables.
var timer = null;

//Called when application is started.
function OnStart()
{	
	//Lock screen orientation to Portrait.
	app.SetOrientation( "Portrait" )
	
	//Create layout.
	lay = app.CreateLayout( "Linear" )	
	
	//Create blank image which fills screen.
	img = app.CreateImage( null, 1.0, 1.0 )
	lay.AddChild( img )
	
	//Set drawing color to blue.
	//format is (#alpha:red:green:blue) in hex.
	img.SetPaintColor( "#ff6622ff" )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Set menus.
	app.SetMenu( "Reset" )
	
	//Create and start accelerometer sensor.
	//(in fast mode with no minimum change value).
	sns = app.CreateSensor( "Accelerometer", "Fast" )
	sns.SetOnChange( sns_OnChange )   
	sns.SetMinChange( 0 )
	sns.Start()
	
	//Set draw start position.
	xdraw = 0.5; ydraw = 0.5;
	xtilt = 0; ytilt = 0;
	
	//Tell user what to do.
	app.ShowPopup( "Hold the screen flat" )
	
	//Set a timer to call the Draw function in 2 secs.
	timer = setTimeout( "Draw()", 2000 )
}

//Draw to the screen at the current x,y posn.
function Draw()
{
	//Shift position.
	xdraw += xtilt;
	ydraw += ytilt;
	
	//Draw a small circle.
	img.DrawCircle( xdraw, ydraw, 0.015 )
	
	//Call this func again in 1 millisec.
	timer = setTimeout( "Draw()", 1 )
}

//Called when 'Accelerometer' sensor changes.
//Values range from approx -10.0 to +10.0
//(the x and y may need swapping on some tablets)
function sns_OnChange( x, y, z )
{
	xtilt = x/100; 
	ytilt = y/100; 
}

//Called when user selects a menu item.
function OnMenu( name )
{        		
	if( name=="Reset" ) 
	{
		//Fill image with solid black.
		img.SetColor( "#ff000000" )
		
		//Reset draw start position.
		xdraw = 0.5; ydraw = 0.5;
		xtilt = 0; ytilt = 0;
	}
}
