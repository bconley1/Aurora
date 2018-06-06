
// Hamburger Menu revealed ON SCROLL

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 130) {
    document.getElementById("desktop_condensed_menu").style.top = "0px";
  } else {
    document.getElementById("desktop_condensed_menu").style.top = "-71px";
  }
});


// Info For Dropdown - DESKTOP INITIAL


var menuOn = false;

function desktop_infofor_function (){
	event.preventDefault();

	if(menuOn){
		$("#desktop_infofor").attr('src', 'desktop_infofor.jpg');
		document.getElementById("desktop_infofor_menu").style.top = "-339px";
		menuOn = false;

	}else{
		$("#desktop_infofor").attr('src', 'desktop_infofor2.jpg');
		document.getElementById("desktop_infofor_menu").style.top = "110px";
		menuOn = true;
	}
}

$('#desktop_infofor').click(desktop_infofor_function);


// Search Dropdown - DESKTOP  INITIAL


function desktop_search_function (){
	event.preventDefault();

	if(menuOn){
		$("#desktop_search").attr('src', 'desktop_search.jpg');
		document.getElementById("desktop_search_menu").style.top = "-201px";
		menuOn = false;

	}else{
		$("#desktop_search").attr('src', 'desktop_search2.jpg');
		document.getElementById("desktop_search_menu").style.top = "110px";
		menuOn = true;
	}
}

$('#desktop_search').click(desktop_search_function);


// Search Dropdown - CONDENSED DESKTOP/TABLET/MOBILE


var SearchIcon = document.getElementById('desktop_condensed_search');
var SearchIconTablet = document.getElementById('tablet_condensed_search');
var SearchIconMobile = document.getElementById('mobile_condensed_search');

var searchMenuOn = false;

function condensed_search_function (){
	event.preventDefault();
	console.log("yoooo");

	if(searchMenuOn){
		SearchIcon.style.fill = '#00467F';
		SearchIcon.style.background = 'white';
		SearchIconTablet.style.fill = '#00467F';
		SearchIconTablet.style.background = 'white';
		SearchIconMobile.style.fill = '#00467F';
		SearchIconMobile.style.background = 'white';

		searchMenuOn = false;

		document.getElementById("desktop_search_menu").style.top = "-201px";
		document.getElementById("tablet_search_menu").style.top = "-201px";
		document.getElementById("mobile_search_menu").style.top = "-201px";


	}else{
		SearchIcon.style.fill = 'white';
		SearchIcon.style.background = '#00467F';
		SearchIconTablet.style.fill = 'white';
		SearchIconTablet.style.background = '#00467F';
		SearchIconMobile.style.fill = 'white';
		SearchIconMobile.style.background = '#00467F';

		searchMenuOn = true;

		document.getElementById("desktop_search_menu").style.top = "70px";
		document.getElementById("tablet_search_menu").style.top = "70px";
		document.getElementById("mobile_search_menu").style.top = "70px";
	}
}

$('#desktop_condensed_search').click(condensed_search_function);
$('#tablet_condensed_search').click(condensed_search_function);
$('#mobile_condensed_search').click(condensed_search_function);


// Hamburger Line Animation - DESKTOP


var FirstBar = document.getElementById('bc_first');
var SecondBar = document.getElementById('bc_second');
var ThirdBar = document.getElementById('bc_third');
var CondensedHamburger = document.getElementById('condensed_hamburger');

var hamburgerMenuOn = false;

function hamburger_animation_desktop (){
	event.preventDefault();

	if(hamburgerMenuOn){
		FirstBar.style.transform = 'rotate(0deg)';
		SecondBar.style.opacity = 1;
		ThirdBar.style.transform = 'rotate(0deg)';
		FirstBar.style.background = '#00467F';
		ThirdBar.style.background = '#00467F';
		CondensedHamburger.style.background = 'white';

		hamburgerMenuOn = false;

		document.getElementById("condensed_menu").style.top = "-998px";

	}else{
		FirstBar.style.transform = 'rotate(45deg)';
		SecondBar.style.opacity = 0;
		ThirdBar.style.transform = 'rotate(-45deg)';
		FirstBar.style.background = 'white';
		ThirdBar.style.background = 'white';
		CondensedHamburger.style.background = '#00467F';

		hamburgerMenuOn = true;

		document.getElementById("condensed_menu").style.top = "70px";
	}
}

$('.condensed_hamburger').click(hamburger_animation_desktop);


// Hamburger Line Animation - TABLET


var FourthBar = document.getElementById('bc_fourth');
var FifthBar = document.getElementById('bc_fifth');
var SixthBar = document.getElementById('bc_sixth');
var TabletCondensedHamburger = document.getElementById('condensed_hamburger_tablet');

var hamburgerTabletMenuOn = false;

function hamburger_animation_tablet (){
	event.preventDefault();

	if(hamburgerTabletMenuOn){
		FourthBar.style.transform = 'rotate(0deg)';
		FifthBar.style.opacity = 1;
		SixthBar.style.transform = 'rotate(0deg)';
		FourthBar.style.background = '#00467F';
		SixthBar.style.background = '#00467F';
		TabletCondensedHamburger.style.background = 'white';

		hamburgerTabletMenuOn = false;

		document.getElementById("condensed_menu_tablet").style.top = "-998px";

	}else{
		FourthBar.style.transform = 'rotate(45deg)';
		FifthBar.style.opacity = 0;
		SixthBar.style.transform = 'rotate(-45deg)';
		FourthBar.style.background = 'white';
		SixthBar.style.background = 'white';
		TabletCondensedHamburger.style.background = '#00467F';

		hamburgerTabletMenuOn = true;

		document.getElementById("condensed_menu_tablet").style.top = "70px";
	}
}

$('#condensed_hamburger_tablet').click(hamburger_animation_tablet);


// Hamburger Line Animation - MOBILE


var SeventhBar = document.getElementById('bc_seventh');
var EigthBar = document.getElementById('bc_eigth');
var NinthBar = document.getElementById('bc_ninth');
var MobileCondensedHamburger = document.getElementById('condensed_hamburger_mobile');

var hamburgerMobileMenuOn = false;

function hamburger_animation_mobile (){
	event.preventDefault();

	if(hamburgerMobileMenuOn){
		SeventhBar.style.transform = 'rotate(0deg)';
		EigthBar.style.opacity = 1;
		NinthBar.style.transform = 'rotate(0deg)';
		SeventhBar.style.background = '#00467F';
		NinthBar.style.background = '#00467F';
		MobileCondensedHamburger.style.background = 'white';

		hamburgerMobileMenuOn = false;

		document.getElementById("condensed_menu_mobile").style.top = "-929px";

	}else{
		SeventhBar.style.transform = 'rotate(45deg)';
		EigthBar.style.opacity = 0;
		NinthBar.style.transform = 'rotate(-45deg)';
		SeventhBar.style.background = 'white';
		NinthBar.style.background = 'white';
		MobileCondensedHamburger.style.background = '#00467F';

		hamburgerMobileMenuOn = true;

		document.getElementById("condensed_menu_mobile").style.top = "70px";
	}
}

$('#condensed_hamburger_mobile').click(hamburger_animation_mobile);


