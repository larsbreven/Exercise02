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


  //  Exercise 2 – Leap Year Calendar
  //  Add an input field that lets you enter a year, and tie a script to it that checks whether the year entered is 
  //  a leap year.
  //  Required Features:
  //  • An input field that takes a year and calls the script when submitted. The page should not be 
  //  refreshed.
  //  • A script that checks whether the year entered is a leap year, and presents the result on the page, 
  //  as a message.
  //  Subjects:
  //  • Reading inputs through JavaScript.












  }