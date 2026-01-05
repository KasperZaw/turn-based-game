import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { Character } from "../characters/characters.js";
import {
  ascriptionState,
  gameState,
  getActiveCharacter,
} from "./gameManager.js";
import { nextCharacterTurn } from "./gameManager.js";
import { Enemy } from "../enemies/enemies.js";
import { clickedEnemy } from "./gameManager.js";
import { attackEnemytest } from "./gameManager.js";

const endOfTurn = false;

export function pokazKliknietego(enemies) {
  enemies.forEach((enemy) => {
    enemy.dom.addEventListener("click", () => {
      console.log(enemy.e_id);
      attackEnemytest(enemy);
      console.log(`atak zostal wykonany na postaci: ${enemy.e_id}`);
    });
  });
}

export function attackEnemy(enemies) {
  const atc_btn = document.getElementById("attack_btn");
  atc_btn.addEventListener("click", () => {
    console.log("attack dzila");
    pokazKliknietego(enemies);
  });
}
export function gameManagerUi(heroes, enemies) {
  heroes.forEach((hero) => {
    createCharacter(hero);
  });

  enemies.forEach((enemy) => {
    createEnemy(enemy);
  });
  ascriptionState(heroes, enemies);

  attackEnemy(enemies);
}
