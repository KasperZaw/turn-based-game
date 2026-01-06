import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { Character } from "../characters/characters.js";
import { ascriptionState, gameState, getActiveCharacter } from "./gameManager.js";
import { nextCharacterTurn } from "./gameManager.js";
import { Enemy } from "../enemies/enemies.js";
import { attackEnemytest } from "./gameManager.js";
import { enemyAttack } from "./gameManager.js";
const atc_btn = document.getElementById("attack_btn");
atc_btn.disabled = false;

export function updateGameTest() {
    if (gameState.phase === "endOfAttack") {
        enemyAttack();
        gameState.phase = "playerTurn";
        atc_btn.disabled = false;
    }
}

export function pokazKliknietego(enemies) {
    console.log("funkcja klikniecie enemy do ataku dzziala")
    enemies.forEach(enemy => {
        enemy.dom.addEventListener("click", () => {
            console.log(enemy.e_id);
            attackEnemytest(enemy);
            console.log(`atak zostal wykonany na postaci: ${enemy.e_id  }`)
            console.log("pora na przeciwnika")
            atc_btn.disabled = true;
            updateGameTest();
        })
        gameState.phase = "endOfAttack";
        console.log(gameState.phase)

    })
}

export function attackEnemy(enemies) {
    atc_btn.addEventListener("click", () => {
        console.log("attack dzila");
        pokazKliknietego(enemies);
    })
}

export function gameManagerUi(heroes, enemies) {
    
    heroes.forEach(hero => {
        createCharacter(hero);
    });

    enemies.forEach(enemy => {
        createEnemy(enemy);
    });
    ascriptionState(heroes,enemies)
 

    attackEnemy(enemies);

}