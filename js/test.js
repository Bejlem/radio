/**
 * Created by Jub on 28.07.2018.
 */

var isMenuShown = false;
var isMenuBig = true;
var isHeaderBig = true;
headerButtons = ['#menu_big_open', '#menu_big_close', '#menu_small_open', '#menu_small_close', '#header_button_open', '#header_button_close'];
menu = [ '#menu_top', '#menu_side' ];
const colormap = ['yellow', 'green', 'blue', 'dark', 'black33'];

function onPointerDown(event){
    /** Do stuff here **/
    alert('mouse down!');
}

//window.addEventListener("mousedown", onPointerDown);

window.onload = Initialization;

function Initialization() {
    //toggleContent();
    $(headerButtons[5]).removeClass('hide').addClass('fadein');
    $('#header_title').removeClass('hide').addClass('fadein');
    if( !isMenuShown ) {
        $(headerButtons[0]).removeClass('hide').removeClass('hide-D').addClass('fadein');
        $(headerButtons[1]).addClass('hide-D');
    } else {
        $(headerButtons[1]).removeClass('hide').removeClass('hide-D').addClass('fadein');
        $(headerButtons[0]).addClass('hide-D');
    }
}

$(document).ready( function () {

});

toggleContent = function () {
    if( !isHeaderBig ) {
        // Opening Header
        //window.removeEventListener( 'scroll', No_Scroll );
        $('header').animate({height: '100vh'});
        $(headerButtons[4]).animate({top:'-80'}, 300);
        $(headerButtons[5]).animate({bottom:'7'}, 700);
    } else {
        // Closing Header
        //window.addEventListener( 'scroll', No_Scroll );
        $('header').animate({height:'64'});
        $(headerButtons[4]).animate({top:'3'}, 700);
        $(headerButtons[5]).animate({bottom:'-80'}, 300);
    }
    isHeaderBig = !isHeaderBig;
    //alert('Is the header big = ' + isHeaderBig );
}

toggleBigMenu = function () {
    if( isMenuShown ) {
        $(menu[0]).addClass('hide-D').removeClass('menu-big-open-top');
        $(menu[1]).addClass('hide-D').removeClass('menu-big-open-side');
    } else {
        $(menu[0]).removeClass('hide-D').addClass('menu-big-open-top');
        $(menu[1]).removeClass('hide-D').addClass('menu-big-open-side');
    }
}

toggleMenu = function () {
    if( isMenuShown ) {
        if( isHeaderBig ) {
            //alert('Hide big Menu');
            $('#menu_links').animate({left: '-160'}, 450);
            $(menu[0]).animate({left: '-2', top: '-100', height: '0'}, 10);
            $(menu[1]).animate({left: '-50', width: '0'}, 10);
            $(headerButtons[0]).animate({left: '24', opacity: '1'}, 200);
            $(headerButtons[1]).animate({left: '-60'}, 50);
            //$('#menu_options').animate({left: '-200'}, {duration: 10, queue: false});
            //$('#menu_options').animate({bottom: '-60', left: '0'}, {duration: 500, queue: true});
            $('#option_links').animate({bottom: '-60'}, 450);

        } else {
            alert('Hide small Menu');

        }
    } else{
        if( isHeaderBig ) {
            //alert('Show big Menu');
            $(menu[0]).animate({left: '0', top: '-32', height: '66'}, 10);
            $(menu[1]).animate({left: '-2', width: '160'}, 100);
            //$(headerButtons[0]).animate({top: '-40'}, 10);
            $(headerButtons[0]).animate({left: '140', opacity: '0'}, 10);
            $(headerButtons[1]).animate({left: '24'}, 100);

            $('#menu_links').animate({left: '-15'}, 1200);
            $('#option_links').animate({bottom: '12'}, 200)
        } else {
            alert('Show small Menu');

        }
    }
    isMenuShown = !isMenuShown;
    //isMenuBig = !isMenuBig;
}

No_Scroll = function () {
    window.scrollTo(0, 0);
};
