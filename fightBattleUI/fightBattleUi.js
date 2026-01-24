import {
  getActiveCharacter,
  getActiveEnemy,
  gameState,
} from "../fightLogic/gameManager.js";
import { turnMenager } from "../turnLogic/turnLogic.js";

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

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForTransition(element, ms = 0) {
  return new Promise((resolve) => {
    const handler = (e) => {
      if (e.propertyName !== "transform") return;

      element.removeEventListener("transitionend", handler);
      resolve();
    };

    element.addEventListener("transitionend", handler);
  });
}

export async function characterAttackAnimation(enemy) {
  const heroEl = getActiveCharacter().element;
  const hero = gameState.characters[gameState.target];
  const enemyEl = enemy.dom;
  const enemyS = gameState.enemies[gameState.selectedEnemy];

  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(heroEl, enemyEl);

  requestAnimationFrame(() => {
    heroEl.style.transform = `translate(${heroDX - 200}px, ${heroDY}px)`;
    enemyEl.style.transform = `translate(${enemyDX + 200}px, ${enemyDY}px)`;
  });

  await Promise.all([waitForTransition(heroEl), waitForTransition(enemyEl)]);

  healthBarAnimation({
    hp: enemy.e_hp,
    maxHp: enemy.e_max_hp,
    hpBar: enemy.hp_bar,
  });
  resetAnimation(heroEl, enemyEl);
}

export async function enemyAttackAnimation() {
  const activeEnemy = getActiveEnemy().dom;
  const targetIndex = gameState.target;
  const targetHero = gameState.characters[targetIndex];
  const targetHeroEl = targetHero.element;
  const hero = gameState.characters[gameState.target];

  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(
    targetHeroEl,
    activeEnemy,
  );

  requestAnimationFrame(() => {
    targetHeroEl.style.transform = `translate(${heroDX - 200}px, ${heroDY}px)`;
    activeEnemy.style.transform = `translate(${enemyDX + 200}px, ${enemyDY}px)`;
    console.log("animacja przeciwnika sie uruchamia");
  });

  await Promise.all([
    waitForTransition(targetHeroEl),
    waitForTransition(activeEnemy),
  ]);

  healthBarAnimation({
    hp: hero.ch_hp,
    maxHp: hero.ch_max_hp,
    hpBar: hero.hp_bar,
  });
  resetAnimation(targetHeroEl, activeEnemy);
}

export function healthBarAnimation({ hp, maxHp, hpBar }) {
  const percent = Math.floor((hp / maxHp) * 100);
  hpBar.style.width = `${percent}%`;
}

export async function handlePhaseEffects() {
  if (gameState.phase === "playerAttacking") {
    const foe = gameState.enemies[gameState.selectedEnemy];
    await characterAttackAnimation(foe);
    gameState.phase = "enemyTurn";
    turnMenager();
  }
  if (gameState.phase === "enemyAttacking") {
    console.log(`Weszlismy do enemy attacking${gameState.phase}`);
    await wait(2000);
    await enemyAttackAnimation();

    gameState.phase = "chooseEnemy";
  }
}
