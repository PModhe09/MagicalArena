const readline = require('readline');

// for taking an integer as input
async function inputInteger(inputMessage){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(async (resolve) => {
        rl.question(inputMessage, async (inputString) => {
          rl.close();
          const userInput = parseInt(inputString.trim(), 10);
          if (!isNaN(userInput)) {
            resolve(userInput);
          } else {
            console.log("Invalid Input, Please enter an Integer.");
            resolve(await inputInteger(inputMessage)); 
          }
        });
      });
}

// for taking a string as input
async function inputString(inputMessage){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      return new Promise((resolve) => {
        rl.question(inputMessage, (inputString) => {
          rl.close();
          resolve(inputString);
        });
      });
}

// function for taking player details as input
async function inputPlayerDetails(){
    
    const name = await inputString("Enter New Player's Name : ");
    const health = await inputInteger(`Enter ${name}'s Health value : `);
    const attack = await inputInteger(`Enter ${name}'s Attack value : `);
    const strength = await inputInteger(`Enter ${name}'s Strength value : `);

    return {name,health,attack,strength};
}

module.exports = {inputInteger,inputString, inputPlayerDetails};