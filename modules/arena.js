"use strict"

const { rollDice } = require("../utils/rollDice");
const Player = require("./player");

class Arena{
    
    constructor(){
        this.totalPlayers = 0;
        this.players = new Map();
        console.log("You are in The Arena Now!")
    }

    getPlayersCount(){
       return this.players.size;
    }

    isPresent(id){
        return this.players.has(id);
    }

    DisplayPlayers(){
        console.log('|\tId\t|\tName\t|\tHealth\t|\tStrength|\tAttack\t|');
        for (const [id, player] of this.players) {
            const { name, health, strength, attack } = player;
            console.log(`|\t${id}\t|\t${name}\t|\t${health}\t|\t${strength}\t|\t${attack}\t|`);
        }
         console.log('\n');
    }

    AddPlayer(name, health, attack, strength){
        if(name.length === 0 || name === null){
            console.log("Please Enter name")
            return -1;
        }
        if(health <= 0){
            console.log("Please enter health value greater than 0");
            return -1;
        }
        if(attack <= 0){
            console.log("Please enter attack value greater than 0");
            return -1;
        }
        if(strength <= 0){
            console.log("Please enter strength value greater than 0");
            return -1;
        }

        const id = this.totalPlayers + 1;
        const newPlayer = new Player(id, name, health, attack, strength);
        this.players.set(id,newPlayer);
        this.totalPlayers += 1;
        
        return id;
    }

    Battle(id1,id2){
         if(id1 === id2){
            console.log("Id's can not be same! A player can not fight with itself.");
         }
         else if(!this.players.has(id1)){
            console.log(`Entered ID : ${id1} does not exist. Please entered a valid ID.`);
         }
         else if(!this.players.has(id2)){
            console.log(`Entered ID : ${id1} does not exist. Please entered a valid ID.`);
         }
         else{
            let attacker = this.players.get(id1);
            let defender = this.players.get(id2);
            console.log(`In the red corner it's ${attacker.name} In the blue corner it is ${defender.name}`);
            if(defender.health < attacker.health){
                [defender,attacker] = [attacker,defender];
            }

            while(defender.health > 0){
                
                let attackingDice = rollDice();
                let defendingDice = rollDice();
                let attackingPower = attacker.attack * attackingDice;
                let defendingStrength = defender.strength * defendingDice;
                
                console.log(`Attacking Dice gets ${attackingDice} and multiplied with it's attack ${attacker.attack} gives damage of ${attackingPower}`);
                console.log(`Defending Dice gets ${defendingDice} and multiplied with it's strength ${defender.strength} can soak damange upto ${defendingStrength}`);

                if(attackingPower > defendingStrength){
                    defender.health -= (attackingPower-defendingStrength);
                    defender.health = Math.max(0, defender.health);
                }

                console.log(`${attacker.name} remaining health is ${attacker.health}`);
                console.log(`${defender.name} remaining health is ${defender.health}`);

                if(defender.health > 0){
                    [attacker,defender] = [defender,attacker];
                }
            }

            console.log(`Winner of this Battle is ${attacker.name}`);
            console.log(`${attacker.name} Health was ${attacker.health} when he Defeated ${defender.name}`);
         }
    }

}

module.exports = Arena;