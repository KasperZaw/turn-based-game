import { gameState, enemyAttack, nextCharacterTurn , nextEnemyTurn, getActiveCharacter} from "../fightLogic/gameManager.js";
import { attackEnemytest } from "../fightLogic/gameManager.js";
import { handlePhaseEffects } from "../fightBattleUI/fightBattleUi.js";

export function turnMenager() {
  const selectedEnemyIndex = gameState.selectedEnemy;
  const selectedEnemy = gameState.enemies[selectedEnemyIndex];
  const selectedCharacterIndex = gameState.selectedCharacter;

  if (gameState.phase === "playerTurn") {
    attackEnemytest(selectedEnemy);
  }
  if (gameState.phase === "enemyTurn") {
    enemyAttack();
    nextCharacterTurn();
    nextEnemyTurn();
    gameState.phase = "enemyAttacking";
    handlePhaseEffects();
    console.log(`PO ATAKU USTAWIAMY FAZE GRY NA${gameState.phase}`)
  }

  if (gameState.phase === "playerTurnHeal") {
    gameState.characters[selectedCharacterIndex].heal(20);
    gameState.phase = "playerHealAnimation";
    console.log(gameState.phase);
  }
}
