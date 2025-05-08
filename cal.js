function appendToResult(value) {
    document.getElementById('result').value += value;
}

function appendOperator(operator) {
    const result = document.getElementById('result').value;
    if (result === '') return;
    const lastChar = result[result.length - 1];
    if ('+-*/'.includes(lastChar)) return;
    document.getElementById('result').value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteCharacter() {
    const result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
