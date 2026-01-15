import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { Character } from "../characters/characters.js";
import { ascriptionState, gameState, enemyTurn, playerTurn, chooseEnemy } from "./gameManager.js";
import { nextCharacterTurn } from "./gameManager.js";
import { Enemy } from "../enemies/enemies.js";
import { attackEnemytest } from "./gameManager.js";
import { enemyAttack } from "./gameManager.js";
import { characterAttackAnimation, enemyAttackAnimation } from "../fightBattleUI/fightBattleUi.js";
const atc_btn = document.getElementById("attack_btn");
export function gameManagerUi(heroes, enemies) {
    
    heroes.forEach(hero => {
        createCharacter(hero);
    });

    enemies.forEach(enemy => {
        createEnemy(enemy);
    });
    ascriptionState(heroes,enemies)
 
    atc_btn.addEventListener("click", () => {
        if (gameState.phase !== "chooseEnemy") return;
        playerTurn();
        console.log("Wybierz przeciwnika");
        console.log(`faza zmieniona po kliknieciu attak na: ${gameState.phase}`)
      });
      enemies.forEach(enemy => {
        enemy.dom?.addEventListener("click", () => {
            if (gameState.phase !== "playerTurn") return;
            console.log(enemy.e_id)
            attackEnemytest(enemy);
            characterAttackAnimation(enemy);
            console.log(`atak zostal wykonany na postaci: ${enemy.e_id  }`)
            console.log("pora na przeciwnika")
            enemyTurn()
            setTimeout(() => {

                enemyAttack();
                enemyAttackAnimation()
            },8000)
            chooseEnemy();
        })
    })
}
console.log(`${gameState.phase}`)