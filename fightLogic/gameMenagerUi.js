import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { ascriptionState, gameState, playerTurn } from "./gameManager.js";
import { turnMenager } from "../turnLogic/turnLogic.js";
import { handlePhaseEffects } from "../fightBattleUI/fightBattleUi.js";

export const atc_btn = document.getElementById("attack_btn");
export function gameManagerUi(heroes, enemies) {
  heroes.forEach((hero) => {
    createCharacter(hero);
  });

  enemies.forEach((enemy) => {
    createEnemy(enemy);
  });
  ascriptionState(heroes, enemies);

  atc_btn.addEventListener("click", () => {
    if (gameState.phase !== "chooseEnemy") return;
    playerTurn();
    console.log("Wybierz przeciwnika");
    console.log(`faza zmieniona po kliknieciu attak na: ${gameState.phase}`);
    handlePhaseEffects();
  });
  enemies.forEach((enemy) => {
    enemy.dom?.addEventListener("click", () => {
      if (gameState.phase !== "playerTurn") return;
      gameState.selectedEnemy = enemy.e_id;
      turnMenager();
      console.log(`atak zostal wykonany na postaci: ${enemy.e_id}`);
      console.log("pora na przeciwnika");
      handlePhaseEffects();
    });
  });
}
console.log(`${gameState.phase}`);
