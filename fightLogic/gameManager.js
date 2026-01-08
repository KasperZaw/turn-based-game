import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { character_arr } from "../characters/characters_list.js";
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
};

export function ascriptionState(characters, enemies) {
  gameState.characters = characters;
  gameState.activeCharacterIndex = 0;
  gameState.enemy_id;
  gameState.enemies = enemies;
  gameState.activeEnemyIndex = 0;
  gameState.phase = "chooseEnemy";
  console.log("przypisanie powiodlo sie");
}

export function nextCharacterTurn() {
  gameState.activeCharacterIndex =
    (gameState.activeCharacterIndex + 1) % gameState.characters.length;
  console.log(
    `przelaczam na bohater ${gameState.activeCharacterIndex} o nazwie ${gameState.activeCharacterIndex.ch_name}`,
  );
}

export function nextEnemyTurn() {
  gameState.activeEnemyIndex =
    (gameState.activeEnemyIndex + 1) % gameState.enemies.length;
}

export function getActiveCharacter() {
  return gameState.characters[gameState.activeCharacterIndex];
}

export function attackEnemytest(enemy) {
  const activeCharacter = gameState.characters[gameState.activeCharacterIndex];
  enemy.takeDmg(activeCharacter.ch_dmg);
  console.log(`bohater zadal dmg w wysokosci: ${activeCharacter.ch_dmg}`);
  console.log(`enemy ma tyle hp: ${enemy.e_hp}`);
  console.log("testowe dzialanie attaku");
  console.log(gameState.phase);
}

export function getActiveEnemy() {
  return gameState.enemies[gameState.activeEnemyIndex];
}

export function enemyAttack() {
  const enemy = gameState.enemies[gameState.activeEnemyIndex];
  const randomIndex = Math.floor(Math.random() * gameState.characters.length);
  const target = gameState.characters[randomIndex];
  target.takeDmg(enemy.e_dmg);
  console.log(`PRZECIWNIK WYBIERA GRACZA ${randomIndex}`);
  console.log(`zenemy zadal orbrazenia ${target.ch_hp}`);
  console.log(`atakuje Przeciwnik nr ${target.e_id}`);
  // console.log(`bohater po ataku enemy ma: ${character.ch_hp} punktow hp.`)
}
