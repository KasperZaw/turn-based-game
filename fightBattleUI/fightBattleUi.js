import { getActiveCharacter } from "../fightLogic/gameManager.js";
import { getActiveEnemy } from "../fightLogic/gameManager.js";
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
  requestAnimationFrame(() => {
    heroEl.style.transform = "translate(0, 0)";
  });

  requestAnimationFrame(() => {
    enemyEl.style.transform = "translate(0, 0)";
  });
}

export function showCharacter(enemy) {
  const heroEl = getActiveCharacter().element;
  const enemyEl = enemy.dom;

  const { heroDX, heroDY, enemyDX, enemyDY } =
    dotArea(heroEl, enemyEl);

  requestAnimationFrame(() => {
    heroEl.style.transform =
      `translate(${heroDX}px, ${heroDY}px)`;
  });

  requestAnimationFrame(() => {
    enemyEl.style.transform =
      `translate(${enemyDX}px, ${enemyDY}px)`;
  });

  setTimeout(() => {
    resetAnimation(heroEl, enemyEl);
  }, 3000);
}