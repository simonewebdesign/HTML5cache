var xhr;

if (XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xhr = new XMLHttpRequest();
} else {
  // code for IE5, IE6
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.onreadystatechange = function() {

  if (xhr.readyState == 4) {

    document.getElementById("menu").innerHTML = xhr.responseText;
  }
}

xhr.open("GET", "menu.html");
xhr.send();
