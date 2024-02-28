let firstNumber,secondNumber,operator;
let displayValue = '';

//Sets up buttonPanel object
const buttonPanel = document.querySelector('#buttonPanel');

//Sets up listener function in the buttonPanel object
buttonPanel.addEventListener('click',updateDisplayValue);

//Sets up memoryPanel object for showing expression
const memoryPanel = document.querySelector('.memoryPanel');


//Functions to perform the basic mathematical operations with two operands

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

//Function to call the above functions based on the operator

function operate(firstNumber,secondNumber,operator){
    switch(operator){
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);  
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);  
    }
}

//Function to update display when user clicks a button

function updateDisplayValue(e){
    displayValue += e.target.id;
    memoryPanel.innerText = displayValue;

}