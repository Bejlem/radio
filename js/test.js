/**
 * Created by Jub on 28.07.2018.
 */

var isMenuShown = false;
var isMenuBig = true;
var isHeaderBig = true;
headerButtons = ['#menu_open', '#menu_close', '#header_button_open', '#header_button_close'];
menu = [ '#menu_top', '#menu_side', '#menu_bot', '#menu_social' ];
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
        $(headerButtons[2]).animate({top:'-80'}, 300);
        $(headerButtons[3]).animate({bottom:'7'}, 700);
    } else {
        // Closing Header
        //window.addEventListener( 'scroll', No_Scroll );
        $('#social_links_top').animate({bottom: '68'}, 0);
        $('header').animate({height:'64'});
        $(headerButtons[2]).animate({top:'3'}, 700);
        $(headerButtons[3]).animate({bottom:'-80'}, 300);
        $(menu[2]).animate({bottom: '-30', height: '55'}, 10); //
        $('#social_links_bot').animate({top: '12'}, 200); //

        $(menu[1]).animate({left: '-50', width: '0'}, 355);
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

toggleMenu = function (id) {
    //alert(id);
    if( isMenuShown ) {
        if( isHeaderBig ) {
            //alert('Hide big Menu');
            if( id != 'menu_big_open') {
                $('#social_links_top').animate({bottom: '68'}, 10);
                $('#menu_links_side').animate({left: '-160'}, 450);
                $('#option_links').animate({bottom: '-60'}, 450);
                $(menu[0]).animate({top: '-100', height: '0'}, 10);
                $(menu[1]).animate({left: '-50', width: '0'}, 10);
                $(headerButtons[0]).animate({left: '24', opacity: '1'}, 200);
                $(headerButtons[0]).css('cursor', 'pointer');
                $(headerButtons[1]).animate({left: '-60'}, 50);
                //$('#menu_options').animate({left: '-200'}, {duration: 10, queue: false});
                //$('#menu_options').animate({bottom: '-60', left: '0'}, {duration: 500, queue: true});
            }

        } else {
            //alert('Hide small Menu');
            $('#social_links_bot').animate({top: '54'}, 10); //
            $(menu[0]).animate({top: '-100', height: '0'}, 10);
            $(menu[2]).animate({bottom: '-100', height: '0'}, 10); //
            $(headerButtons[0]).animate({left: '24', opacity: '1'}, 200);
            $(headerButtons[0]).css('cursor', 'pointer');
            $(headerButtons[1]).animate({left: '-60'}, 50);

        }
    } else{
        if( isHeaderBig ) {
            //alert('Show big Menu');
            $(menu[0]).animate({top: '-32', height: '66'}, 10);
            $(menu[1]).animate({left: '0', width: '160'}, 100);
            //$(headerButtons[0]).animate({top: '-40'}, 10);
            $(headerButtons[0]).animate({left: '140', opacity: '0'}, 10);
            $(headerButtons[0]).css('cursor', 'default');
            $(headerButtons[1]).animate({left: '24'}, 100);

            $('#social_links_top').animate({bottom: '16'}, 200);
            $('#menu_links_side').animate({left: '-15'}, 1200);
            $('#option_links').animate({bottom: '12'}, 200);

        } else {
            //alert('Show small Menu');
            $(menu[0]).animate({top: '-32', height: '66'}, 10);
            $(menu[2]).animate({bottom: '-30', height: '55'}, 10); //
            $(headerButtons[0]).animate({left: '140', opacity: '0'}, 10);
            $(headerButtons[0]).css('cursor', 'default');
            $(headerButtons[1]).animate({left: '24'}, 100);

            $('#social_links_bot').animate({top: '12'}, 200); //
        }
    }
    isMenuShown = !isMenuShown;
    //isMenuBig = !isMenuBig;
}

No_Scroll = function () {
    window.scrollTo(0, 0);
};
