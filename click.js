//*****************UNIT RESOURCES************************** */
const Buttons = document.querySelectorAll('.buttons');
const addBtn = document.querySelector('#addBtn');
const countDisplay = document.querySelector("#numDisplay");
const body = document.querySelector('body');

// button clicks
for (var i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click" , function(e) {
        if(e.target.value === "+") {
            countDisplay.value = parseInt(countDisplay.value) + 1;
            console.log("clicked");
        }
        if (e.target.value === "-") {
            countDisplay.value = parseInt(countDisplay.value) - 1;
            changeToBlue();
        }
    })
}

function changeToBlue () {
    document.body.style.background = "blue";
}

