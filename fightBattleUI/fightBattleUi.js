import {
  getActiveCharacter,
  getActiveEnemy,
  gameState
} from "../fightLogic/gameManager.js";
import { turnMenager } from "../turnLogic/turnLogic.js";

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

  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(heroEl, enemyEl);

  requestAnimationFrame(() => {
    heroEl.style.transform = `translate(${heroDX - 200}px, ${heroDY}px)`;
  });

  requestAnimationFrame(() => {
    enemyEl.style.transform = `translate(${enemyDX + 200}px, ${enemyDY}px)`;
  });

  setTimeout(() => {
    resetAnimation(heroEl, enemyEl);
  }, 800);
  healthBarAnimation();
}

export function enemyAttackAnimation() {
  const activeEnemy = getActiveEnemy().dom;
  const targetIndex = gameState.target;
  const targetHero = gameState.characters[targetIndex];
  const targetHeroEl = targetHero.element;
  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(
    targetHeroEl,
    activeEnemy,
  );

  requestAnimationFrame(() => {
    targetHeroEl.style.transform = `translate(${heroDX - 200}px, ${heroDY}px)`;
    console.log("targetowanie dziala");
  });

  requestAnimationFrame(() => {
    activeEnemy.style.transform = `translate(${enemyDX + 200}px, ${enemyDY}px)`;
  });

  setTimeout(() => {
    resetAnimation(targetHeroEl, activeEnemy);
  }, 1200);
}

// zrobic jedna funkcje z arugmentami ppdawanymi w pliku glownym enemy, character
export function healthBarAnimation() {
  const selectedEnemy = gameState.enemies[gameState.selectedEnemy];
  const selectedEnemyHp = selectedEnemy.e_hp;
  const selectedEnemyMaxHp = selectedEnemy.e_max_hp;

  const take_dmg_from_bar = Math.floor(
    (selectedEnemyHp / selectedEnemyMaxHp) * 100,
  );

  const dmg_taken =
    (selectedEnemyMaxHp / selectedEnemyMaxHp) * 100 - take_dmg_from_bar;
  console.log(dmg_taken);

  selectedEnemy.hp_bar.style.width = `${take_dmg_from_bar}%`;
}

export function playerhealthBarAnimation() {
  const targetIndex = gameState.target;
  const targetHero = gameState.characters[targetIndex];
  const targetHeroHp = targetHero.ch_hp;
  const targetHeroMaxHp = targetHero.ch_max_hp;

  const take_dmg_from_bar = Math.floor((targetHeroHp / targetHeroMaxHp) * 100);

  const dmg_taken = (targetHeroHp / targetHeroMaxHp) * 100 - take_dmg_from_bar;
  console.log(dmg_taken);

  targetHero.hp_bar.style.width = `${take_dmg_from_bar}%`;
}
export function handlePhaseEffects() {
  if (gameState.phase === "playerAttacking") {
    const enemy = gameState.enemies[gameState.selectedEnemy];
    characterAttackAnimation(enemy);

    setTimeout(() => {
      gameState.phase = "enemyTurn";
      turnMenager();
      handlePhaseEffects();
    }, 800);
  }

  if (gameState.phase === "enemyAttacking") {
    enemyAttackAnimation();
    playerhealthBarAnimation();

    setTimeout(() => {
      gameState.phase = "chooseEnemy";
    }, 800);
  }
}