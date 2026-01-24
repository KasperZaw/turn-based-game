import {
  enemyTurn,
  gameState,
  chooseEnemy,
  enemyAttack,
} from "../fightLogic/gameManager.js";
import { atc_btn } from "../fightLogic/gameMenagerUi.js";
import { attackEnemytest } from "../fightLogic/gameManager.js";

export function turnMenager() {
  const selectedEnemyIndex = gameState.selectedEnemy;
  const selectedEnemy = gameState.enemies[selectedEnemyIndex];
  //atc_btn = true
  if (gameState.phase === "playerTurn") {
    attackEnemytest(selectedEnemy);
    gameState.phase = "playerAttacking";
  }
  if (gameState.phase === "enemyTurn") {
    enemyAttack();
    gameState.phase = "enemyAttacking";
  }
  if (gameState.phase === "chooseEnemy") {
    atc_btn.disabled = false;
  }
}
