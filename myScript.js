function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbarclass") {
    x.className +=" responsive";
  }
  else {
    x.className ="navbarclass";

  }
}



function testResponsive() {
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
/*
  DOM (task 3)
*/

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



function boldtext(navitem) {
  //navitem.style.backgroundColor: "black";
}
function bigpic(pic) {
  pic.style.height= "100px";
}

function formbg(x) {
  x.style.background = "white";
}
