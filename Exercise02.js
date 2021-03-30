"use strict";

  var myH1 = document.getElementsByTagName("h1")[0];   
  myH1.innerHTML = "Exercise 02";        
  myH1.style.color = "Red";                           

  var myVar = setInterval(everySec, 1000);

  function everySec() {
    var date = new Date();
    var d = date.toLocaleDateString();
    var t = date.toLocaleTimeString();
    document.getElementById("date").innerHTML = d;
    document.getElementById("time").innerHTML = t;
  }