import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { Character } from "../characters/characters.js";
import { ascriptionState } from "./playerMenu.js";
import { nextCharacterTurn } from "./playerMenu.js";
import { Enemy } from "../enemies/enemies.js";

export function chooseEnemy(enemies) {
    enemies.forEach(enemy => {
        enemy.dom.addEventListener("mouseenter", () => {
            enemy.dom.classList.add("cursor-attack")
            console.log("cursor zmieniony")
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