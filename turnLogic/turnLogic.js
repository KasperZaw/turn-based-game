import { gameState, enemyAttack } from "../fightLogic/gameManager.js";
import { attackEnemytest } from "../fightLogic/gameManager.js";

export function turnMenager() {
  const selectedEnemyIndex = gameState.selectedEnemy;
  const selectedEnemy = gameState.enemies[selectedEnemyIndex];
  const selectedCharacterIndex = gameState.selectedCharacter;

  if (gameState.phase === "playerTurn") {
    attackEnemytest(selectedEnemy);
    gameState.phase = "playerAttacking";
  }
  if (gameState.phase === "enemyTurn") {
    enemyAttack();
    gameState.phase = "enemyAttacking";
  }
  // if (gameState.phase === "chooseEnemy") {
  //   atc_btn.disabled = false;
  // }
  if (gameState.phase === "playerTurnHeal") {
    gameState.characters[selectedCharacterIndex].heal(20);
    gameState.phase = "playerHealAnimation";
    console.log(gameState.phase);
  }
}
