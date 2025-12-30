import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
export function attackEnemy() {
    const atc_btn = document.getElementById("attack_btn");
    atc_btn.addEventListener("click", () => {
        console.log("attack dzila")
    })
}
export function playerMenuUi(characters, enemies) {
    attackEnemy();
    characters.forEach(character => {
        createCharacter(character);
    });

    enemies.forEach(enemy => {
        createEnemy(enemy);
    });

}