//define others
let outputScreen = document.getElementById("output-screen");
//define buttons
let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
let button4 = document.getElementById("btn-4");
let button5 = document.getElementById("btn-5");
let button6 = document.getElementById("btn-6");
let button7 = document.getElementById("btn-7");
let button8 = document.getElementById("btn-8");
let button9 = document.getElementById("btn-9");
let button0 = document.getElementById("btn-0");
let buttonC = document.getElementById("btn-c");
let buttonAdd = document.getElementById("btn-add");
let buttonSub = document.getElementById("btn-sub");
let buttonMult = document.getElementById("btn-mult");
let buttonDiv = document.getElementById("btn-div");
let buttonEqual = document.getElementById("btn-equal");
//add event listener
button1.addEventListener("click",inputNumber);
button2.addEventListener("click",inputNumber);
button3.addEventListener("click",inputNumber);
button4.addEventListener("click",inputNumber);
button5.addEventListener("click",inputNumber);
button6.addEventListener("click",inputNumber);
button7.addEventListener("click",inputNumber);
button8.addEventListener("click",inputNumber);
button9.addEventListener("click",inputNumber);
button0.addEventListener("click",inputNumber);
buttonAdd.addEventListener("click",inputNumber);
buttonSub.addEventListener("click",inputNumber);
buttonMult.addEventListener("click",inputNumber);
buttonDiv.addEventListener("click",inputNumber);
buttonEqual.addEventListener("click",calculateNow);
buttonC.addEventListener("click",clearScreen);
//functions
function inputNumber() {
    let buttonVal = this.value;
    outputScreen.innerHTML = outputScreen.innerHTML + buttonVal
}
function clearScreen() {

    outputScreen.innerHTML="";
}
function calculateNow() {
    let screenOutput = outputScreen.innerHTML;
    let result = eval(screenOutput);
    outputScreen.innerHTML=result;
}