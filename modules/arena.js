"use strict"

const Player = require("./player");

class Arena{
    
    constructor(){
        this.totalPlayers = 0;
        this.players = new Map();
        console.log("You are in The Arena Now!")
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

}

module.exports = Arena;