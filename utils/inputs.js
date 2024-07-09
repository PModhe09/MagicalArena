const readline = require('readline');

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
            console.log("invalid Input, Please enter an Integer.");
            resolve(await inputIntegerFromUser(inputMessage)); 
          }
        });
      });
}

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

async function inputPlayerDetails(){
    
    const name = inputString("Enter New Player's Name");
    const health = inputInteger(`Enter ${name}'s Health value`);
    const attack = inputInteger(`Enter ${name}'s Attack value`);
    const strength = inputInteger(`Enter ${name}'s Strength value`);

    return {name,health,attack,strength};
}

module.exports = {inputInteger,inputString,inputPlayerDetails};