//math functions//
function addFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  let awnsr;
  var total = num1 + num2;
  awnsr = window.prompt("what is " + num1 + " + " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML =
      "CORECT!!! the awnser is " + total;
  } else {
    document.getElementById("p1").innerHTML =
      "INCORECT!!! the awnser is " + total;
  }
}
function subFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  let awnsr;
  var total = num1 - num2;
  awnsr = window.prompt("what is " + num1 + " - " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML =
      "CORECT!!! the awnser is " + total;
  } else {
    document.getElementById("p1").innerHTML =
      "INCORECT!!! the awnser is " + total;
  }
}
function mulFunc() {
  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 51);
  let awnsr;
  var total = num1 * num2;
  awnsr = window.prompt("what is " + num1 + " X " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML =
      "CORECT!!! the awnser is " + total;
  } else {
    document.getElementById("p1").innerHTML =
      "INCORECT!!! the awnser is " + total;
  }
}
function divFunc() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 10, 2);
  let awnsr;
  var total = Math.floor(num1 / num2);
  awnsr = window.prompt("what is " + num1 + " / " + num2);
  if (awnsr == total) {
    document.getElementById("p1").innerHTML =
      "CORECT!!! the awnser is " + total;
  } else if (total == "Infinity" && awnsr == 0) {
    document.getElementById("p1").innerHTML =
      "CORECT!!! the awnser is 0: well techicly this question is imposable but idk i'ma lazy dev :3";
  } else {
    document.getElementById("p1").innerHTML =
      "INCORECT!!! the awnser is " + total;
  }
}
//math functions//
