// Put the number 0 in your title. If you click the #1 button the title should change to "1" and the background to blue.
// If you click the #2 button the title should change to "2" and the background to red. Use classlist to change the background.
var buttonClick1 = document.getElementById("number");
// var buttonClick2 = document.getElementById("activate1");
// var buttonClick3 = document.getElementById("activate2");

buttonClick1.addEventListener("click",clickFunc1);
// buttonClick2.addEventListener("click",clickFunc1);
// buttonClick3.addEventListener("click",clickFunc1);

function clickFunc1() {
   console.log("hey");
}
