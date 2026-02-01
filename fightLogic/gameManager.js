export const gameState = {
  characters: [],
  enemies: [],
  activeCharacterIndex: 0,
  activeEnemyIndex: 0,
  target: 0,
  phase: "chooseEnemy",
  enemy_choice: "",
  player_choice: "",
  enemy_id: null,
  selectedEnemy: null,
  selectedCharacter: null,
};

export function ascriptionState(characters, enemies) {
  gameState.characters = characters;
  gameState.activeCharacterIndex;
  gameState.enemy_id;
  gameState.target;
  gameState.selectedEnemy;
  gameState.selectedCharacter;
  gameState.enemies = enemies;
  gameState.activeEnemyIndex = 0;
  gameState.phase = "chooseEnemy";
  console.log("przypisanie powiodlo sie");
}

export function nextCharacterTurn() {
 const startIndex = gameState.activeCharacterIndex;
  do {
    gameState.activeCharacterIndex =
      (gameState.activeCharacterIndex + 1) % gameState.characters.length;

      const character = gameState.characters[gameState.activeCharacterIndex]

      if(character.isAlive()) {
        return character
      }
  } while (gameState.activeCharacterIndex !== startIndex);
  return null;
}

export function nextEnemyTurn() {
  const startEnemyIndex = gameState.activeEnemyIndex;

  do {
    gameState.activeEnemyIndex =
    (gameState.activeEnemyIndex + 1) % gameState.enemies.length;

    const enemy = gameState.enemies[gameState.activeEnemyIndex];

    if(enemy.isAlive()) {
      return enemy
    }

  } while (gameState.activeEnemyIndex !== startEnemyIndex)
    return null
}

export function getActiveCharacter() {
  const activeCharacter = gameState.characters[gameState.activeCharacterIndex];
  return activeCharacter;
}

export function attackEnemytest(enemy) {
  if (!enemy.isAlive()) return;
  const activeCharacter = getActiveCharacter();
  enemy.takeDmg(activeCharacter.ch_dmg);
  console.log(`bohater zadal dmg w wysokosci: ${activeCharacter.ch_dmg}`);
  console.log(`enemy ma tyle hp: ${enemy.e_hp}`);
  console.log("testowe dzialanie attaku");
  console.log(gameState.phase);
  gameState.phase = "playerAttacking";
}

export function getActiveEnemy() {
  return gameState.enemies[gameState.activeEnemyIndex];
}

export function randomChoiceE() {
  const randomIndex = Math.floor(Math.random() * gameState.characters.length);
  return (gameState.target = randomIndex);
}

export function enemyAttack() {
  const enemy = getActiveEnemy();
  // zabezpieczenie przed enemy undefind  
  if (!enemy || !enemy.isAlive()) return;

  const aliveCharacters = gameState.characters.filter(c => c.isAlive());
  if (aliveCharacters.length === 0) return;

  const target =
    aliveCharacters[Math.floor(Math.random() * aliveCharacters.length)];

  target.takeDmg(enemy.e_dmg);

  console.log(
    `ENEMY ${enemy.e_id} ATAKUJE ${target.ch_id}, dmg: ${enemy.e_dmg}`
  );
}

export function playerTurn() {
  gameState.phase = "playerTurn";
}
export function enemyTurn() {
  gameState.phase = "enemyTurn";
}
export function chooseEnemy() {
  gameState.phase = "chooseEnemy";
}
export function playerAttacking() {
  gameState.phase = "playerAttacking";
}
export function enemyAttacking() {
  gameState.phase = "enemyAttacking";
}
