const calcNumButtons = document.querySelectorAll('.calc-num');
const calOperators = document.querySelectorAll('.calc-operator');
const upperDisplay = document.querySelector('#upper-display');
const lowerDisplay = document.querySelector('#lower-display');
//const display = document.querySelector('#display');
const clearAllButton = document.querySelector('#clear-all-button');
const clearButton = document.querySelector('#clear-button');
const equalButton = document.querySelector('#equal');
clearAllButton.addEventListener('click', function () {
    upperDisplay.textContent = '';
    lowerDisplay.textContent = '';
})
clearButton.addEventListener('click', function () {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
})
calcNumButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (lowerDisplay.textContent == 'error') {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
        }
        if (lowerDisplay.textContent == 'Infinity') {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
        }
        if (lowerDisplay.textContent == 'Not a Number') {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
        }
        if (lowerDisplay.textContent == 'Plese pick a number') {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
        }

          if (lowerDisplay.textContent == 'Plese pick a number') {
            lowerDisplay.textContent = '';
    }  
        lowerDisplay.textContent += this.getAttribute("data-calc")
    })
})
calOperators.forEach(button => {
    button.addEventListener('click', function () {
        if (lowerDisplay.textContent == '') {
            lowerDisplay.textContent = 'Plese pick a number'
            return
        }
        else if (lowerDisplay.textContent == 'Plese pick a number') {
            lowerDisplay.textContent = 'Plese pick a number'
            return
        }
        else if (lowerDisplay.textContent == 'error') {
            lowerDisplay.textContent = '';
        }
        if (lowerDisplay.textContent == 'Not a Number') {
            lowerDisplay.textContent = 'Plese pick a number'
        }
        else {upperDisplay.textContent = lowerDisplay.textContent + ' ' + this.getAttribute("data-calc");
        lowerDisplay.textContent = '';}

        
    })
})
equalButton.addEventListener('click', function () {
    if (lowerDisplay.textContent == 'error') {
        return;
    }
    let displayList = upperDisplay.textContent.split(' ');
    let firstOperand = +displayList[0];
    let operator = displayList[displayList.length - 1];
    let secondOperand = +lowerDisplay.textContent;
    let result = '';

    
    if (operator === '^') {
        result = firstOperand ** secondOperand;
    }
    else if (operator === '/') {
        if (secondOperand == '0') {
            result = 'error';
        }
        else result = firstOperand / secondOperand;
    }
    else if (operator === '*') {
        result = firstOperand * secondOperand;
    }
    else if (operator === '-') {
        result = firstOperand - secondOperand;
    }
    else if (operator === '+') {
        result = firstOperand + secondOperand;
    }
    else {result = 'error'}
    
    upperDisplay.textContent = upperDisplay.textContent + ' ' + lowerDisplay.textContent;

    lowerDisplay.textContent = result;
    if (lowerDisplay.textContent == 'NaN') {
        lowerDisplay.textContent = 'Not a Number'
    }
})
