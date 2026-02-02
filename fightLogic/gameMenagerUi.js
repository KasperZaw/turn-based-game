import { createCharacter } from "../characters/ui.js";
import { createEnemy } from "../enemies/ui_enemies.js";
import { ascriptionState, gameState } from "./gameManager.js";
import { turnMenager } from "../turnLogic/turnLogic.js";
import { handlePhaseEffects } from "../fightBattleUI/fightBattleUi.js";
import { nextCharacterTurn } from "./gameManager.js";
import { TurnPhase } from "./gameManager.js";
const atc_btn = document.getElementById("attack_btn");
const heal_btn = document.getElementById("heal_btn");


export function gameManagerUi(heroes, enemies) {
  heroes.forEach((hero) => {
    createCharacter(hero);
  });
  enemies.forEach((enemy) => {
    createEnemy(enemy);
  });
  ascriptionState(heroes, enemies);

  atc_btn.addEventListener("click", () => {
    if (gameState.phase !== TurnPhase.CHOOSE_ENEMY) return;
    gameState.phase = TurnPhase.PLAYER_TURN;
    console.log("Wybierz przeciwnika");
    console.log(`faza zmieniona po kliknieciu attak na: ${gameState.phase}`);
    handlePhaseEffects();
  });
  heal_btn.addEventListener("click", () => {
    if (gameState.phase !== "chooseEnemy") return;
    gameState.phase = TurnPhase.PLAYER_HEAL;
    console.log("heal dziala");
    console.log(gameState.phase);
  });

  enemies.forEach((enemy) => {
    enemy.dom?.addEventListener("click", () => {
      if (gameState.phase !== TurnPhase.PLAYER_TURN) return;
      gameState.selectedEnemy = enemy.e_id;
      turnMenager();
      console.log(`atak zostal wykonany na postaci: ${enemy.e_id}`);
      console.log("pora na przeciwnika");
      handlePhaseEffects();
    });
  });
  heroes.forEach((hero) => {
    hero.dom.addEventListener("click", () => {
      if (gameState.phase !== TurnPhase.PLAYER_HEAL) return;
      if(hero.ch_hp !== hero.ch_max_hp) {
        gameState.selectedCharacter = hero.ch_id;
        console.log(gameState.selectedCharacter);
        console.log("for each dziala");
        nextCharacterTurn();
        turnMenager();
        handlePhaseEffects();
      }
    });
  });
}
