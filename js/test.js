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
    toggleContent();
    if( !isMenuShown ) {
        $(headerButtons[0]).removeClass('hide').removeClass('hide-D').addClass('fadein');
        $(headerButtons[1]).addClass('hide-D');
        window.removeEventListener( 'scroll', No_Scroll );
    } else {
        $(headerButtons[1]).removeClass('hide').removeClass('hide-D').addClass('fadein');
        $(headerButtons[0]).addClass('hide-D');
    }
    $(headerButtons[5]).removeClass('hide').addClass('fadein');
    $('#header_title').removeClass('hide').addClass('fadein');
}

$(document).ready( function () {

});

toggleContent = function (keyframes, options) {
    if( isHeaderBig ) {
        //window.removeEventListener( 'scroll', No_Scroll );
        $('header').animate({height: '100vh'}, options);
        $(headerButtons[4]).animate({top:'-40'}, 300);
        $(headerButtons[5]).animate({bottom:'10'}, 700);
        //$(menuButtons[5]).addClass('rotate-180');
    } else {
        //window.addEventListener( 'scroll', No_Scroll );
        $('header').animate({height:'64'}, options);
        $(headerButtons[4]).animate({top:'0'}, 700);
        $(headerButtons[5]).animate({bottom:'-45'}, 300);
        //$(menuButtons[5]).removeClass('rotate-180');
    }
    isHeaderBig = !isHeaderBig;
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
        if( isMenuBig ) {
            alert('Menu shown and big');
        } else {

        }
    } else{
        if( isMenuBig ) {
            alert('Menu hidden and big');
        } else {

        }
    }
    isMenuShown = !isMenuShown;
    isMenuBig = !isMenuBig;
}

No_Scroll = function () {
    window.scrollTo(0, 0);
};
var Header_Open = function() {
    $('header').removeClass('header-small');
    isHeaderBig = true;
}
var Header_Close = function() {
    $('header').addClass('header-small');
    isHeaderBig = false;
}
