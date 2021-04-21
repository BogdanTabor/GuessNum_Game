let randomNumber = Math.floor(Math.random() * 4) + 1; //make a password check function
let attempts = 4;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

input.focus();

document.onclick = function(event) {
  document.getElementById("input").focus();
};

prompt.addEventListener('submit', handleSubmit);

printMessage('robco industries (tm) termlink protocol');
printMessage('enter number now');

function handleSubmit(event) {
  event.preventDefault();
  processInput(input.value);
  input.value = '';
}

function printMessage(message) {
  let li = document.createElement('li');
  li.textContent = message;
  output.appendChild(li);
}

function processInput(input) {
  if (!input) return;
  
  printMessage(`${attempts} attempt(s) left`); //make an updated string
  printMessage(input);
  let userGuess = Number.parseInt(input);
  if (Number.isNaN(userGuess)) return;
  

  if (userGuess === randomNumber) {
    printMessage('Correct');
    printMessage('Press enter to restart')
    setResetGame()
    } else if (attempts === 0) {
    printMessage('Entry denied');
    printMessage('Terminal locked');
    printMessage('Press enter to restart')
    setResetGame()
    } else {
    printMessage('Entry denied');
    if (userGuess < randomNumber) {
      printMessage(`the number ${input} is less`);
    } else if (userGuess > randomNumber) {
      printMessage(`the number ${input} is greater`);
    }
  }
  attempts --;
}

function setResetGame() {
  document.querySelector('input').addEventListener(
    "keydown", ({key}) => {
    if (key === "Enter") {
      window.location.reload()
    }
  })
}
