//*****************UNIT RESOURCES************************** */
const Buttons = document.querySelectorAll('.buttons');
const countDisplay = document.getElementById(".numDisplay");

//**********VARIABLES************* */
var cd = 0;


// button clicks
for (var i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click" , function(e) {
      document.getElementById(".numDisplay").value = cd;
        if(e.target.value === "+") {
            cd++;
        }
    })
}