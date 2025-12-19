import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { character_arr} from "../characters/characters_list.js";
import { enemies_arr } from "../enemies/enemies_list.js";
const attackBtn = document.getElementById("attack_btn");

let is_clicked = false;
attackBtn.addEventListener("click", (event) => {
    console.log("button is clicked");
    is_clicked = true;
    console.log(is_clicked)
});

export function playerMenu() {

    character_arr.forEach(character => {
        createCharacter(character);
    });

    enemies_arr.forEach(enemy => {
        createEnemy(enemy);
       
        enemy.enemyImg.addEventListener("click", () => {
            if (is_clicked === true) {
        
                console.log(enemy.e_name);
            }   
        });
    });

}
