var getInputValue = document.getElementById('inputValue');
var returnResult = document.getElementById('currentResult');
var returnHistory = document.getElementById('resultHistory');

window.onload = function(){
    document.getElementById('button-submit').addEventListener('click',playGame);
    document.getElementById('button-restart').addEventListener('click',resetGame);
}

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


function playGame(){
    console.log(getInputValue.value);
    var createElementHistory = document.createElement('div');
    createElementHistory.classList.add('list-group');
    createElementHistory.innerHTML = 'Your guess ' + getInputValue.value;
    returnHistory.append(createElementHistory);

    if (getInputValue.value > randomNumber) {
        returnResult.innerHTML = 'Your guess is too high ' + getInputValue.value;
    } else if (getInputValue.value < randomNumber) {
        returnResult.innerHTML = 'Your guess is too low ' + getInputValue.value;
    } else {
        returnResult.innerHTML ='CONGRATULATION you got it ' + getInputValue.value;
        document.getElementById("currentResult").style.backgroundColor = "green";
    }
}

function resetGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    returnResult.innerHTML = '';
    returnHistory.innerHTML = '';
    console.log(randomNumber);
}

