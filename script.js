let firstNumber = '';
let secondNumber = '';
let operator = '';
let previousKey = '';

const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const backspaceButton = document.querySelector('#backspace')
const clearButton = document.querySelector('#clear')
const operandButtons = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equalSign = document.querySelector('#equals');
const decimalSign = document.querySelector('#decimal')
const basicCalc = document.getElementById('basic');
const scientificCalc = document.getElementById('scient');
const scientificButtons = document.getElementById('scientific');


function add(a,b) {
    return (a + b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,c) {
    if (c === '+') {
        return add(a,b);
    }
    if (c === '-') {
        return subtract(a,b);
    }
    if (c === '*') {
        return multiply(a,b);
    }
    if (c === '/') {
        return divide(a,b);
    }
}

function displayVariable(a) {
    screen.textContent += a;
}
        
backspaceButton.addEventListener('click', function() {
    screen.textContent = screen.textContent.toString().slice(0,-1);
})
    
clearButton.addEventListener('click', function() {
    screen.textContent = '';
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if (previousKey === 'operator' || previousKey === '') {
            screen.textContent = ''
        }
        displayVariable(numberButton.textContent)
        previousKey = 'number';
    })
})

operandButtons.forEach(operandButton => {
    operandButton.addEventListener('click', function() {
        if (operator == '') {
            operator = operandButton.textContent;
            firstNumber = screen.textContent;
        }
        else if (!operator == '') {
            secondNumber = screen.textContent;
            let result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
            firstNumber = result;
            operator = operandButton.textContent;
            screen.textContent = result;
        }
        display.textContent = firstNumber + operator;
        previousKey = 'operator'

    })})

equalSign.addEventListener('click', function() {
    secondNumber = screen.textContent;
    screen.textContent = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);   
})

decimalSign.addEventListener('click', function() {
    if (!screen.textContent.includes('.')) {    
        screen.textContent += decimalSign.textContent;
    }})


basicCalc.addEventListener('click', function() {
    if (basicCalc.checked) {
        scientificButtons.style.display = 'none';
}})

scientificCalc.addEventListener('click', function() {
    if (scientificCalc.checked) {
        scientificButtons.style.display = '';
}})




function Inverse() {
    display.textContent = '1/' + screen.textContent;
    screen.textContent = 1/screen.textContent; 
}



function Squared(a) {
    display.textContent = screen.textContent + '^2'
    screen.textContent = screen.textContent ** 2;
}


function Cubed(a) {
    display.textContent = screen.textContent + '^3'
    screen.textContent = screen.textContent ** 3;
}

function SquareRoot(a) {
    display.innerHTML = "&radic;" + screen.textContent;
    screen.textContent = Math.sqrt(screen.textContent);
}

function Factorial(a) {
    if (a == 0 || a == 1) {
        return 1; 
    }
    else if (a > 1) {
        return (a * Factorial(a - 1));
    }
}

const factorialButton = document.querySelector('#factorial');
factorialButton.addEventListener('click', function() {
    display.textContent = screen.textContent + '!';
    screen.textContent = Factorial(screen.textContent);
})

function eRaised() {
    display.textContent = 'e^ ' + screen.textContent;
    screen.textContent = Math.E ** screen.textContent;
}

function tenRaised() {
display.textContent = '10^' + screen.textContent;
screen.textContent = 10 ** screen.textContent;
}


function Sine() {
    display.textContent = 'sin(' + screen.textContent + ')';
    screen.textContent = Math.sin(screen.textContent * Math.PI / 180);
}


function Cosine() {
    display.textContent = 'cos(' + screen.textContent + ')';
    screen.textContent = Math.cos(screen.textContent * Math.PI / 180);
}


function Tangent() {
    display.textContent = 'tan(' + screen.textContent + ')';
    screen.textContent = Math.tan(screen.textContent * Math.PI / 180);
}

function Log() {
    display.textContent = 'log(' + screen.textContent + ')';
    screen.textContent = Math.log10(screen.textContent);
}

function Ln() {
    display.textContent = 'ln(' + screen.textContent + ')';
    screen.textContent = Math.log(screen.textContent);
}

scientificButtons.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        let roundedNumber = screen.textContent;
        screen.textContent = Math.round(roundedNumber * 1000) / 1000; 
    })
})

scientificButtons.style.display = 'none';

