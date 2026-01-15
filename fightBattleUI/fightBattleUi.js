import { createCharacter } from "../characters/ui.js";
import { getActiveCharacter, getActiveEnemy } from "../fightLogic/gameManager.js";
import { gameState } from "../fightLogic/gameManager.js";

const dot = document.querySelector(".dot");

export function dotArea(heroEl, enemyEl) {
  const heroPos = heroEl.getBoundingClientRect();
  const enemyPos = enemyEl.getBoundingClientRect();

  const dotX = window.innerWidth / 2;
  const dotY = window.innerHeight / 2;

  const heroX = heroPos.left + heroPos.width / 2;
  const heroY = heroPos.top + heroPos.height / 2;

  const enemyX = enemyPos.left + enemyPos.width / 2;
  const enemyY = enemyPos.top + enemyPos.height / 2;

  return {
    heroDX: dotX - heroX,
    heroDY: dotY - heroY,
    enemyDX: dotX - enemyX,
    enemyDY: dotY - enemyY,
  };
}

export function resetAnimation(heroEl, enemyEl) {
    heroEl.style.transform = "translate(0, 0)";
    enemyEl.style.transform = "translate(0, 0)";
}

export function characterAttackAnimation(enemy) {
  const heroEl = getActiveCharacter().element;
  const enemyEl = enemy.dom;

    const { heroDX, heroDY, enemyDX, enemyDY } =
    dotArea(heroEl, enemyEl);
 
    
      requestAnimationFrame(() => {
      heroEl.style.transform =
        `translate(${heroDX - 200}px, ${heroDY}px)`;
    });
  
    requestAnimationFrame(() => {
      enemyEl.style.transform =
        `translate(${enemyDX + 200}px, ${enemyDY}px)`;
    });
  
    setTimeout(() => {
      resetAnimation(heroEl, enemyEl);
    }, 3000);
    healthBarAnimation();
  }


export function enemyAttackAnimation() {
  const activeEnemy = getActiveEnemy().dom;
  const targetIndex = gameState.target;
  const targetHero = gameState.characters[targetIndex];
  const targetHeroEl = targetHero.element;
  const { heroDX, heroDY, enemyDX, enemyDY } =
  dotArea(targetHeroEl, activeEnemy);

  requestAnimationFrame(() => {
    targetHeroEl.style.transform =
      `translate(${heroDX - 200}px, ${heroDY}px)`;
      console.log("targetowanie dziala")
  });

  requestAnimationFrame(() => {
    activeEnemy.style.transform =
      `translate(${enemyDX + 200}px, ${enemyDY}px)`;
  });

  setTimeout(() => {
    resetAnimation(targetHeroEl, activeEnemy);
  }, 3000);
}
export function healthBarAnimation() {
  const activeHero = gameState.characters[gameState.activeCharacterIndex];
  const activeHeroDmg = activeHero.ch_dmg;
  const selectedEnemy = gameState.enemies[gameState.selectedEnemy];
  const selectedEnemyHp = selectedEnemy.e_hp;

  const take_dmg_from_bar = Math.floor((activeHeroDmg / selectedEnemyHp) * 100)
  const currentUiHp = selectedEnemy.hp_bar.style.width;
  const currentUiHpNum = parseFloat(
    selectedEnemy.hp_bar.style.width || "100%"
  );
  console.log(`aktualne hp przeciwnika to ${currentUiHpNum}`)
  
  const hp_after_attack = currentUiHpNum - take_dmg_from_bar
  console.log(`aktualne zabrane hp przeciwnika to ${hp_after_attack}`)
  selectedEnemy.hp_bar.style.width = `${hp_after_attack}%`
 
}