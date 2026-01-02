import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { Character } from "../characters/characters.js";
import { ascriptionState, getActiveCharacter } from "./gameManager.js";
import { nextCharacterTurn } from "./gameManager.js";
import { Enemy } from "../enemies/enemies.js";
import { clickedEnemy } from "./gameManager.js";
import { attackEnemytest } from "./gameManager.js";


export function pokazKliknietego(enemies) {
    enemies.forEach(enemy => {
        enemy.dom.addEventListener("click", () => {
            console.log(enemy.e_id);
            attackEnemytest();
        })
    })
}

export function chooseEnemy(enemies) {
    enemies.forEach(enemy => {
        enemy.dom.addEventListener("mouseenter", () => {
            enemy.dom.classList.add("cursor-attack");
            console.log("cursor zmieniony");
            clickedEnemy();
            pokazKliknietego(enemies);
        })
    })
}

export function attackEnemy(enemies) {
    const atc_btn = document.getElementById("attack_btn");
    atc_btn.addEventListener("click", () => {
        console.log("attack dzila");
        chooseEnemy(enemies);
        nextCharacterTurn();

    })
}
export function playerMenuUi(heroes, enemies) {
    
    heroes.forEach(hero => {
        createCharacter(hero);
    });

    enemies.forEach(enemy => {
        createEnemy(enemy);
    });
    ascriptionState(heroes,enemies)
    attackEnemy(enemies);

}