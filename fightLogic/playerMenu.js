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
}

export function ascriptionState(characters, enemies) {
    gameState.characters = characters;
    gameState.activeCharacterIndex = 0;

    gameState.enemies = enemies;
    gameState.activeEnemyIndex = 0
    gameState.phase = "chooseEnemy";
}

export function nextCharacterTurn() {
    gameState.activeCharacterIndex =
    (gameState.activeCharacterIndex + 1) % gameState.characters.length
}

export function nextEnemyTurn() {
    gameState.activeEnemyIndex = 
    (gameState.activeEnemyIndex + 1) % gameState.enemies.length
}

export function getActiveCharacter() {
    return gameState.characters[gameState.activeCharacterIndex]
}

export function getActiveEnemy() {
    return gameState.enemies[gameState.activeCharacterIndex]
}

export function playerChoice(player_choice) {
    
}

export function playerMenu() {


}
