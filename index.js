const readline = require('readline');
const assistant = require('./assistant');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processCommand(command) {
  const response = assistant.respondToCommand(command);
  console.log(response);
}

function askQuestion() {
  rl.question('> ', (command) => {
    processCommand(command);
    askQuestion();
  });
}

console.log('Zitti Assistant');
console.log('Enter a command or question:');
askQuestion();