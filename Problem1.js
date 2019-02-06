//PROBLEM1
//Create a h1 element with "Not this Question Again..." Create a button with "Click Me".
// Once it's clicked, ask the user if they want to continue being asked to quit.
// If they enter 'n', stop asking. If they enter anything else, ask again.
var buttonClicked = document.getElementById("clickOnMe");
buttonClicked.addEventListener("click", clickFunc);

function clickFunc() {
    userInput = '';
    while (userInput !== "n"){
        userInput = prompt("Do you want to continue?");
    }
}