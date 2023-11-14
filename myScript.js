
$(document).ready(
  // Visually marks the selected navigation item in the navbar
  function(){

  $("#startnav").click(function(){
    setNavBG("#startnav");
  });
  $("#drinknav").click(function(){
    setNavBG("#drinknav");
  });
  $("#lunchnav").click(function(){
    setNavBG("#lunchnav");
  });
  $("#breakfastnav").click(function(){
    setNavBG("#breakfastnav");
  });
  $("#pastrynav").click(function(){
    setNavBG("#pastrynav");
  });
  $("#contactnav").click(function(){
    setNavBG("#contactnav");
  });


});

function setNavBG(navitem) {
    $(".navitem").animate({borderWidth:'0px', opacity: 1});
    $(navitem).animate({borderWidth: '1px', opacity: '1'});
    ;
  }

function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbarclass") {
    x.className +=" responsive";
  }
  else {
    x.className ="navbarclass";

  }
}


// Toggling between displayed nav menu in responsive mode
function toggleResponsiveNav() {
  var x = document.getElementById("navbar");

  if (x.className === "navbarclass") {
    x.className +=" responsive";

  }
  else {
    x.className ="navbarclass";

  }

  var y = document.getElementById("startpage");

  if (y.className === "startpageclass") {
    y.className += " responsive";

  }
  else {
    y.className = "startpageclass";
  }


  var z = document.getElementById("language");

  if (z.className === "languageclass") {
    z.className += " responsive";

  }
  else {
    z.className = "languageclass";
  }

  var w = document.getElementById("banner");

  if (w.className === "bannerclass") {
    w.className += " responsive";

  }
  else {
    w.className = "bannerclass";
  }



  var a = document.getElementById("languageresponsive");

  if (a.className === "languagebottomclass") {
    a.className += " responsive";

  }
  else {
    a.className = "languagebottomclass";
  }
}

// Scrolls the page to selected nav item
function scrollToId(id) {
  idstring = id;
  var element = document.getElementById(idstring);
  element.scrollIntoView();

  var x = document.getElementById("navbar");
  var z = document.getElementById("languageresponsive");

  if (x.className == "navbarclass responsive") {
    x.className ="navbarclass";
    z.className = "languagebottomclass";
    window.scrollBy(0, -110);

  }
  else {
    window.scrollBy(0, -175);
    

  }

}

function languagechoice(language) {
  var ancestor = document.getElementById('language');
  var decendents = ancestor.getElementsByTagName('*');

  for (var i = 0; i <decendents.length; ++i) {
    var e = decendents[i];
    e.style["border-bottom"] = "0px";

  }

  var l = document.getElementById(language);
  l.style["border-bottom"] = "1px solid var(--caramel)";
}
