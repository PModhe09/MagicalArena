const Arena = require('./modules/arena');
const {inputInteger, inputPlayerDetails} = require('./utils/inputs');

const main = async() =>{

    const arena = new Arena();

    while(true){

       console.log("Options \n 1) Battle \n 2) Add New Player \n 3) Exit Arena");
       const option = await inputInteger("Choose Option : ");

       if(option === 1){

           arena.DisplayPlayers();

           if(arena.getPlayersCount() < 2){
             console.log("How can One and Zero Player fight ? . Enter More Players xD");
           }
           else{
              const id1 = await inputInteger("Enter ID of Fighter 1 : ");
              const id2 = await inputInteger("Enter ID of Fighter 2 : ");
              arena.Battle(id1,id2);
           }
           console.log("Battle Started : ");
       }

       else if(option === 2){
           console.log("Enter Details to Enter New Player in Arena : ");
           const playerDetails = await inputPlayerDetails();
           const {name, health, attack, strength} = playerDetails;
           arena.AddPlayer(name,health,attack,strength);
       }

       else if(option === 3){
           console.log("GoodBye from Magical Arena!");
           break;
       }

       else{
           console.log("Please Enter a valid option.")
       }
       
    }
}

main();