import { gameState, enemyAttack, nextCharacterTurn , nextEnemyTurn, getActiveCharacter} from "../fightLogic/gameManager.js";
import { attackEnemytest } from "../fightLogic/gameManager.js";
import { handlePhaseEffects } from "../fightBattleUI/fightBattleUi.js";
import { TurnPhase } from "../fightLogic/gameManager.js";

export function turnMenager() {
  const selectedEnemyIndex = gameState.selectedEnemy;
  const selectedEnemy = gameState.enemies[selectedEnemyIndex];
  const selectedCharacterIndex = gameState.selectedCharacter;

  if (gameState.phase === TurnPhase.PLAYER_TURN) {
    attackEnemytest(selectedEnemy);
  }
  if (gameState.phase === TurnPhase.ENEMY_TURN) {
    enemyAttack();
    nextCharacterTurn();
    nextEnemyTurn();
    gameState.phase = TurnPhase.ENEMY_ATTACKING;
    handlePhaseEffects();
    console.log(`PO ATAKU USTAWIAMY FAZE GRY NA${gameState.phase}`)
  }

  if (gameState.phase === TurnPhase.PLAYER_HEAL) {
    gameState.characters[selectedCharacterIndex].heal(20);
    gameState.phase = TurnPhase.PLAYER_HEAL_ANIMATION;
    console.log(gameState.phase);
  }
}
