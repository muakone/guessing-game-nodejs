const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.setPrompt("Guess a number from 1 to 10: ")
rl.prompt()
rl.on('line', (input) => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if(input == randomNumber) {
        console.log("computer's number", randomNumber)
        console.log("Congrats, You win!");
    } else if(input === "exit"){
        rl.close()
        process.exit()
    } else{
        console.log("computer's number", randomNumber)
        console.log("Sorry, guess again!")
    }
    rl.prompt()
})
