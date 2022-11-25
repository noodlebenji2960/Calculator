let display = document.getElementById("display")
let buttons = document.getElementById("buttons")
let n1 = ""
let n2 = ""
let operator = ""
let displayValue = "" 

///////////////////////////////

let display2 = document.getElementById("display2")

display2.innerText = " "
stored = ""
display2.addEventListener("mouseover", mouseoverDisplay2)
display2.addEventListener("mouseout", mouseoutDisplay2)
display2.addEventListener("click", toggleHistory)

function mouseoverDisplay2(){
    stored = display2.innerText
    display2.innerText =  "Toggle History"
}

function mouseoutDisplay2(){
    display2.innerText = stored
}

let toggle = false
function toggleHistory(){
    if(toggle == false){
        historyContainer.style.visibility = "visible"
        toggle = true
    } else {
        historyContainer.style.visibility = "hidden"
        toggle = false
    }
}

///////////////////////////////

document.addEventListener("keydown", function onEvent(event) {
    if      (event.key === "Backspace") {btnCF()}
});
document.addEventListener("keypress", function onEvent(event) {
    if      (event.key === "0")         {btn0F()}
    else if (event.key === "1")         {btn1F()}
    else if (event.key === "2")         {btn2F()}
    else if (event.key === "3")         {btn3F()}
    else if (event.key === "4")         {btn4F()}
    else if (event.key === "5")         {btn5F()}
    else if (event.key === "6")         {btn6F()}
    else if (event.key === "7")         {btn7F()}
    else if (event.key === "8")         {btn8F()}
    else if (event.key === "9")         {btn9F()}
    else if (event.key === "+")         {btnAddF()}
    else if (event.key === "-")         {btnSubtractF()}
    else if (event.key === "*")         {btnMultiplyF()}
    else if (event.key === "/")         {btnDivideF()}
    else if (event.key === ".")         {btnDotF()}
    else if (event.key === "Enter")     {operate()}
});

//////////////////////////////// on buttons click doesn´t add first number to display

let keyframesArray =[   {ASCII: "____________"},
                        {ASCII: "___________H"},
                        {ASCII: "__________HE"},
                        {ASCII: "_________HEL"},
                        {ASCII: "________HELL"},
                        {ASCII: "_______HELLO"},
                        {ASCII: "______HELLO_"},
                        {ASCII: "_____HELLO__"},
                        {ASCII: "____HELLO___"},
                        {ASCII: "___HELLO____"},
                        {ASCII: "__HELLO_____"},
                        {ASCII: "_HELLO______"},
                        {ASCII: "HELLO_______"},
                        {ASCII: "ELLO________"},
                        {ASCII: "LLO_________"},
                        {ASCII: "LO__________"},
                        {ASCII: "O___________"},
                        {ASCII: "____________"},
];

index = 0

let animation = setInterval(() => {
    let currentItem = (keyframesArray[index++ % keyframesArray.length]);
    display.textContent = currentItem.ASCII}, 500);

buttons.addEventListener("click", clearAnimation)
document.addEventListener("keypress", clearAnimation)
document.addEventListener("keydown", clearAnimation)

function clearAnimation(){
    btnACF()
    clearInterval(animation)
    buttons.removeEventListener("click",clearAnimation)
    document.removeEventListener("keypress", clearAnimation)
    document.removeEventListener("keydown", clearAnimation)
}

///////////////////////////

function numberButton(){
    if (operator == ""){
        n1 += displayValue
    } else 
        n2 += displayValue
        checkDisplayStringLength()
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
        checkDisplayStringLength()
    }
}

function truncated(num) {
    return Math.trunc(num * 100000000) / 100000000;
}

function checkDisplayStringLength(){
let length = display.innerText.length
    if (length >= 12){
        display.style.fontSize = "35px"
    } else if(length <= 12){
        display.style.fontSize = "65px"
    } else if(length >= 46){
        display.style.fontSize = "65px"
        display.innerText = "MAX"
    }
}
/////////////////////////// need to make one function to rule them all (numbers), for less code, M function, C backspace function 
let btn0 = document.getElementById("0")
btn0.addEventListener("click", btn0F)
function btn0F(){
    displayValue = "0"
    display.textContent += "0"
    numberButton()
}

let btn1 = document.getElementById("1")
btn1.addEventListener("click", btn1F)
function btn1F(){
    displayValue = "1"
    display.textContent += "1"
    numberButton()

}

let btn2 = document.getElementById("2")
btn2.addEventListener("click", btn2F)
function btn2F(){
    displayValue = "2"
    display.textContent += "2"
    numberButton()

}

let btn3 = document.getElementById("3")
btn3.addEventListener("click", btn3F)
function btn3F(){
    displayValue = "3"
    display.textContent += "3"
    numberButton()

}

let btn4 = document.getElementById("4")
btn4.addEventListener("click", btn4F)
function btn4F(){
    displayValue = "4"
    display.textContent += "4"
    numberButton()

}

let btn5 = document.getElementById("5")
btn5.addEventListener("click", btn5F)
function btn5F(){
    displayValue = "5"
    display.textContent += "5"
    numberButton()

}

let btn6 = document.getElementById("6")
btn6.addEventListener("click", btn6F)
function btn6F(){
    displayValue = "6"
    display.textContent += "6"
    numberButton()

}

let btn7 = document.getElementById("7")
btn7.addEventListener("click", btn7F)
function btn7F(){
    displayValue = "7"
    display.textContent += "7"
    numberButton()

}

let btn8 = document.getElementById("8")
btn8.addEventListener("click", btn8F)
function btn8F(){
    displayValue = "8";
    display.textContent += "8"
    numberButton();

}

let btn9 = document.getElementById("9")
btn9.addEventListener("click", btn9F)
function btn9F(){
    displayValue = "9";
    display.textContent += "9"
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
    display2.innerText = "";
    checkDisplayStringLength()
}

let btnAdd = document.getElementById("+")
btnAdd.addEventListener("click", btnAddF)
function btnAddF(){
    operatorButton()
    operator = "+";
    display.textContent += operator;

}

let btnSubtract = document.getElementById("-")
btnSubtract.addEventListener("click", btnSubtractF)
function btnSubtractF(){
    operatorButton()
    operator = "-";
    display.textContent += operator;

}

let btnMultiply = document.getElementById("X")
btnMultiply.addEventListener("click", btnMultiplyF)
function btnMultiplyF(){
    operatorButton()
    operator = "*";
    display.textContent += operator;

}

let btnDivide = document.getElementById("/")
btnDivide.addEventListener("click", btnDivideF)
function btnDivideF(){
    operatorButton()    
    operator = "/";
    display.textContent += operator;

}

// NEED TO DISABLE operator and decimal BUTTON IF DECIMAL or operator ALREADY EXISTS

let btnDot = document.getElementById(".")
btnDot.addEventListener("click", btnDotF)
function btnDotF(){
    displayValue = ".";
    display.textContent += ".";
    numberButton();

}

let btnPositiveNegative = document.getElementById("+/-")
btnPositiveNegative.addEventListener("click", btnPositiveNegativeF)
function btnPositiveNegativeF(){
        if (operator == ""){
            x = "" + (-(n1));
            xBrackets = "" + "(" + (-(n1)) + ")";
            display.innerText = display.innerText.replace(n1, xBrackets);
            n1 = x;
        } else {
            y = "" + (-(n2));
            yBrackets = "" + "(" + (-(n2)) + ")";
            display.innerText = display.innerText.replace(n2, yBrackets);
            n2 = y;
        }
    checkDisplayStringLength()
}


let btnC = document.getElementById("C")
btnC.addEventListener("click", btnCF)
function btnCF(){
    displayValue = ""
    display.innerText = display.innerText.slice(0, display.innerText.length -1)
    n1 = n1.slice(0, n1.length -1);
    checkDisplayStringLength()
}

/////////////////////////////////

let btnEquals = document.getElementById("equals")
btnEquals.addEventListener("click",operate)
function operate(){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
   if(operator === "+"){
        answer = n1 + n2
    } else if (operator === "-"){
        answer = n1 - n2
    } else if (operator === "*"){
        answer = n1 * n2
    } else if (operator === "/"){
        answer = n1 / n2
    } else {
        display2.innerText = display.innerText
   }
   answer = truncated(answer)
   display2.innerText =  display.innerText
   n1 = "" + answer
   n2 = ""
   operator = ""
   displayValue = ""
   display.textContent = "" + answer
   checkDisplayStringLength()
   historyUpdate()  

}

//////////////////////////////////

let historyIndex = 0
let btnClearHistory = document.getElementById("btnClearHistory")
btnClearHistory.addEventListener("click", clearHistory)

function historyUpdate(){
     historyIndex++
     console.log(historyIndex)
     let cell1 = document.createElement("div");
     historyGridContainer.appendChild(cell1).id = "historyInput" + historyIndex
     document.getElementById("historyInput" + historyIndex).style.cssText =  `
     width: 135px;
     height: auto;
     border-radius: 5px;
     background-color: white;
     margin: 1px;
     padding: 5px;
     `;
     document.getElementById("historyInput" + historyIndex).innerText = display2.innerText + "\n";
     let cell2 = document.createElement("div");
     historyGridContainer.appendChild(cell2).id = "historyOutput" + historyIndex
     document.getElementById("historyOutput" + historyIndex).style.cssText =  `
     width: 135px;
     border-radius: 5px;
     background-color: white;
     margin: 1px;
     padding: 5px;
     text-align: left;
     `;
     document.getElementById("historyOutput" + historyIndex).innerText = "=" + display.innerText + "\n";
} 
function clearHistory(){
    historyGridContainer.replaceChildren()
    btnACF()
}


/// development console log

document.addEventListener("click", consoleIt)
document.addEventListener("keypress", consoleIt)
document.addEventListener("keydown", consoleIt)
    function consoleIt(){
        console.log("---------------")
        console.log("DISPLAY STRING LENGTH: " + display.innerText.length)
        console.log("DISPLAY VALUE: " + (typeof displayValue) + " " + displayValue)
        console.log("N1: " + (typeof n1) + " " + n1)
        console.log("N2: " + (typeof n2) + " " + n2)
        console.log("OPERATOR: " + (typeof operator) + " " + operator)
}