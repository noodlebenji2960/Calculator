let display = document.getElementById("display")
let n1 = ""
let n2 = ""
let operator = ""
let displayValue = "" 

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "Backspace") {
        btnCF()
    }
});
document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "0") {
        btn0F()}
    else if (event.key === "1") {
        btn1F()}
    else if (event.key === "2") {
        btn2F()}
    else if (event.key === "3") {
        btn3F()}
    else if (event.key === "4") {
        btn4F()}
    else if (event.key === "") {
        btn5F()}
    else if (event.key === "6") {
        btn6F()}
    else if (event.key === "7") {
        btn7F()}
    else if (event.key === "8") {
        btn8F()}
    else if (event.key === "9") {
        btn9F()}
    else if (event.key === "+") {
        btnAddF()}
    else if (event.key === "-") {
        btnSubtractF()}
    else if (event.key === "*") {
        btnMultiplyF()}
    else if (event.key === "/") {
        btnDivideF()}
    else if (event.key === "Enter") {
        operate()}
});

///////////////////////////

function numberButton(){
    if (operator == ""){
        n1 += displayValue
    } else 
        n2 += displayValue
}

function operatorButton(){
    if(operator !== ""){
        n1 = parseInt(n1)
        n2 = parseInt(n2)
        if(operator === "+"){
            answer = n1 + n2
        } else if (operator === "-"){
            answer = n1 - n2
        } else if (operator === "*"){
            answer = n1 * n2
        } else if (operator === "/"){
            answer = n1 / n2
        } else {
            answer = "error"
        }
        n1 = "" + answer
        n2 = ""
        operator = ""
        displayValue = ""
    }
}

///////////////////////////

let btn0 = document.getElementById("0")
btn0.addEventListener("click", btn0F)
function btn0F(){
    displayValue = 0
    display.textContent += 0
    numberButton()
}

let btn1 = document.getElementById("1")
btn1.addEventListener("click", btn1F)
function btn1F(){
    displayValue = 1
    display.textContent += 1
    numberButton()
}

let btn2 = document.getElementById("2")
btn2.addEventListener("click", btn2F)
function btn2F(){
    displayValue = 2
    display.textContent += 2
    numberButton()
}

let btn3 = document.getElementById("3")
btn3.addEventListener("click", btn3F)
function btn3F(){
    displayValue = 3
    display.textContent += 3
    numberButton()
}

let btn4 = document.getElementById("4")
btn4.addEventListener("click", btn4F)
function btn4F(){
    displayValue = 4
    display.textContent += 4
    numberButton()
}

let btn5 = document.getElementById("5")
btn5.addEventListener("click", btn5F)
function btn5F(){
    displayValue = 5
    display.textContent += 5
    numberButton()
}

let btn6 = document.getElementById("6")
btn6.addEventListener("click", btn6F)
function btn6F(){
    displayValue = 6
    display.textContent += 6
    numberButton()
}

let btn7 = document.getElementById("7")
btn7.addEventListener("click", btn7F)
function btn7F(){
    displayValue = 7
    display.textContent += 7
    numberButton()
}

let btn8 = document.getElementById("8")
btn8.addEventListener("click", btn8F)
function btn8F(){
    displayValue = 8;
    display.textContent += 8
    numberButton();
}

let btn9 = document.getElementById("9")
btn9.addEventListener("click", btn9F)
function btn9F(){
    displayValue = 9;
    display.textContent += 9
    numberButton();
}

let btnAC = document.getElementById("AC")
btnAC.addEventListener("click", btnACF)
function btnACF(){
    displayValue = "";
    n1 = "";
    n2 = "";
    operator = "";
    display.textContent = "";
}

let btnAdd = document.getElementById("+")
btnAdd.addEventListener("click", btnAddF)
function btnAddF(){
    operatorButton()
    operator = "+";
    display.textContent += operator
}

let btnSubtract = document.getElementById("-")
btnSubtract.addEventListener("click", btnSubtractF)
function btnSubtractF(){
    operatorButton()
    operator = "-";
    display.textContent += operator
}

let btnMultiply = document.getElementById("X")
btnMultiply.addEventListener("click", btnMultiplyF)
function btnMultiplyF(){
    operatorButton()
    operator = "*";
    display.textContent += operator
}

let btnDivide = document.getElementById("/")
btnDivide.addEventListener("click", btnDivideF)
function btnDivideF(){
    operatorButton()    
    operator = "/";
    display.textContent += operator

}

//////////////////////////////// needs work does delete last of n1 or n2 or displayvalue or whatever

let btnC = document.getElementById("C")
btnC.addEventListener("click", btnCF)
function btnCF(){
display.textContent = display.innerText.slice(0, -1)

}
/////////////////////////////////

let btnEquals = document.getElementById("equals")
btnEquals.addEventListener("click",operate)
function operate(){
    n1 = parseInt(n1)
    n2 = parseInt(n2)
   if(operator === "+"){
        answer = n1 + n2
    } else if (operator === "-"){
        answer = n1 - n2
    } else if (operator === "*"){
        answer = n1 * n2
    } else if (operator === "/"){
        answer = n1 / n2
    } else {
        answer = "error"
   }
   n1 = "" + answer
   n2 = ""
   operator = ""
   displayValue = ""
   display.textContent = "" + answer
}
