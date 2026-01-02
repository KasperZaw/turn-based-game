import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { character_arr} from "../characters/characters_list.js";
import { enemies_arr } from "../enemies/enemies_list.js";
import { Enemy } from "../enemies/enemies.js";
const attackBtn = document.getElementById("attack_btn");

export const gameState = {
    characters: [],
    enemies: [],
    activeCharacterIndex: 0,
    activeEnemyIndex: 0,
    phase: "chooseEnemy",
    enemy_choice: "",
    player_choice: "",
    enemy_id: null,
}

export function ascriptionState(characters, enemies) {
    gameState.characters = characters;
    gameState.activeCharacterIndex = 0;
    gameState.enemy_id;
    gameState.enemies = enemies;
    gameState.activeEnemyIndex = 0
    gameState.phase = "chooseEnemy";
    console.log("przypisanie powiodlo sie")
}

export function nextCharacterTurn() {
    gameState.activeCharacterIndex =
    (gameState.activeCharacterIndex + 1) % gameState.characters.length
    console.log(`przelaczam na bohater ${gameState.activeCharacterIndex}`)
}

export function nextEnemyTurn() {
    gameState.activeEnemyIndex = 
    (gameState.activeEnemyIndex + 1) % gameState.enemies.length
}

export function getActiveCharacter() {
    return gameState.characters[gameState.activeCharacterIndex]
}

export function attackEnemytest() {
    const enemy = gameState.enemies[gameState.activeEnemyIndex];
    const activeCharacter =
    gameState.characters[gameState.activeCharacterIndex];
    enemy.takeDmg(activeCharacter.ch_dmg);
    console.log(activeCharacter.ch_dmg)
    console.log(`enemy ma tyle hp: ${enemy.e_hp}`)
    console.log("testowe dzialanie attaku")
}

export function getActiveEnemy() {
    return gameState.enemies[gameState.activeEnemyIndextak ]
}

export function playerChoice(player_choice) {

}

export function clickedEnemy() {
    
   
}
