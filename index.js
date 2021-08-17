function getInput(value){
    let inputField = document.getElementById('result');
    let inputValue = inputField.value;
    if(inputValue !== 0 && value !== 0){
        inputField.value = inputValue + value;
    }
}
function clearResult(){
    document.getElementById('result').value = '';
}
function calculate(){
    let inputField = document.getElementById('result');
    const result = eval(inputField.value);
    inputField.value = result;
}
function deleteOne(){
    let inputField = document.getElementById('result');
    let presentResult = inputField.value.slice(0,-1);
    inputField.value = presentResult;
}