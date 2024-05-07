const output = document.getElementById('output');

function appendNumber(input) {
    output.value += input;
}

function appendOperator(input) {
    output.value += input;
}

function clearOutput() {
    output.value = '';
}

function calculate(){
    try {
        output.value = eval(output.value);
    }
    catch(error){
        output.value = 'Invalid'
    }
}
