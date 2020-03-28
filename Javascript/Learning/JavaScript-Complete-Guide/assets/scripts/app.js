const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        preResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
}

function calculate(operation) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+'
    }
    else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    }
    else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    }
    else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteLog(operator, initialResult, enteredNumber)
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));