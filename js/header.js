/**
 * Created by Jub on 28.07.2018.
 */

var isMenuShown = false;
var colormap = ['yellow', 'green', 'blue', 'dark', 'black33'];

 $(document).ready( function() {

	//This code will run after your page loads
	 if(isMenuShown) {
		$('#menu_button_close').addClass('hide');
	 } else {
		$('#menu_button_open').addClass('hide');
	 }

	/* -----------------------------------------------------------------------

	 -----------------------------------------------------------------------
	 */

	$('#menu_button_open').mousedown( function() {
	    Menu_Open();
	    //Menu_Open(menubutton[0]);
	});

	$('#hmenu_button_close').mousedown( function() {
	    Menu_Close();
	});

	$('#header_button_open').mousedown( function() {
	    Header_Open();
	});

	$('#header_button_close').mousedown( function() {
	    Header_Close();
	});
});

var Menu_Open = function(/*menubutton*/) {
	$('#menu_button_open').addClass('hide');
	$('#menu_button_close').removeClass('hide');
}

var Menu_Close = function() {
	$('#menu_button_open').addClass('hide');
	$('#menu_button_close').removeClass('hide');
}

var Header_Open = function() {
	//$('#menu_button_open')
}

var Header_Close = function() {
	//$('#menu_button_open')
    }
};
