let firstNumber,secondNumber,operator;





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