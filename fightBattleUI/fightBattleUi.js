import {
  getActiveCharacter,
  getActiveEnemy,
  gameState,
  TurnPhase,
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

export function healthBarAnimation({ hp, maxHp, hpBar, hpTextEl }) {
  const percent = Math.floor((hp / maxHp) * 100);
  hpBar.style.width = `${percent}%`;
  console.log('HP BAR DATA:', {
    hp,
    maxHp,
    percent: Math.floor((hp / maxHp) * 100)
  });

  if (hpTextEl) {
    hpTextEl.textContent = `${hp}`;
  }  
}

export function addHp({ fromHp, toHp, maxHp, hpBar }) {
  let hp = fromHp;
  function animate() {
    if (hp >= toHp) return;

    hp += 0.5;

    healthBarAnimation({ hp, maxHp, hpBar });
    requestAnimationFrame(animate);
  }

  animate();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForTransition(element, ms = 0) {
  return new Promise((resolve) => {
    const handler = (e) => {
      if (e.propertyName !== "transform") return;

      element.removeEventListener("transitionend", handler);
      setTimeout(() => {

        resolve();
      }, ms)
    };

    element.addEventListener("transitionend", handler);
  });
}

async function swapAnimation({type, duration, state}) {
  await wait(duration);
  type.setVisualState(state);
  await wait(duration);
  type.setVisualState("stand");
}

export async function characterAttackAnimation(enemy) {
  const heroEl = getActiveCharacter().dom;
  const enemyEl = enemy.dom;
  const activeCharacter = getActiveCharacter();
  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(heroEl, enemyEl);

  requestAnimationFrame(() => {
    heroEl.style.transform = `translate(${heroDX - 80}px, ${0}px)`;
    enemyEl.style.transform = `translate(${enemyDX + 80}px, ${0}px)`;
  });

  await Promise.all([
    waitForTransition(heroEl, 1800), 
    waitForTransition(enemyEl, 1800),
    swapAnimation({
      type: activeCharacter,
      duration: 800,
      state: "attack"
    }),
    swapAnimation({
      type: enemy,
      duration: 800,
      state: "attack"
    })
  ]);
      
    healthBarAnimation({
    hp: enemy.e_hp,
    maxHp: enemy.e_max_hp,
    hpBar: enemy.hp_bar,
    hpTextEl: enemy.enemy_hp
  });
  resetAnimation(heroEl, enemyEl);
}

export async function enemyAttackAnimation() {
  const activeEnemy = getActiveEnemy().dom;
  const targetIndex = gameState.target;
  const targetHero = gameState.characters[targetIndex];
  const targetHeroEl = targetHero.dom;
  const hero = gameState.characters[gameState.target];
  const enemy = getActiveEnemy();
  
  const { heroDX, heroDY, enemyDX, enemyDY } = dotArea(
    targetHeroEl,
    activeEnemy,
  );

  requestAnimationFrame(() => {
    targetHeroEl.style.transform = `translate(${heroDX - 80}px, ${0}px)`;
    activeEnemy.style.transform = `translate(${enemyDX + 80}px, ${0}px)`;
    console.log("animacja przeciwnika sie uruchamia");
  });

  await Promise.all([
    waitForTransition(targetHeroEl, 500),
    waitForTransition(activeEnemy, 500),
    swapAnimation({
      type: targetHero,
      duration: 800,
      state: "attack"
    }),
    swapAnimation({
      type: enemy,
      duration: 800,
      state: "attack"
    })
  ]);
 
  healthBarAnimation({
    hp: hero.ch_hp,
    maxHp: hero.ch_max_hp,
    hpBar: hero.hp_bar,
    hpTextEl: hero.character_hp
  });
  resetAnimation(targetHeroEl, activeEnemy);
}



export async function handlePhaseEffects() {
  if (gameState.phase === TurnPhase.PLAYER_ATTACKING) {
    const foe = gameState.enemies[gameState.selectedEnemy];
    await characterAttackAnimation(foe);
    gameState.phase = TurnPhase.ENEMY_TURN;
    turnMenager();
  }
  if (gameState.phase === TurnPhase.ENEMY_ATTACKING) {
    await wait(2000);
    await enemyAttackAnimation();
    gameState.phase = TurnPhase.CHOOSE_ENEMY;
  }
  if (gameState.phase === TurnPhase.PLAYER_HEAL_ANIMATION) {
    const selectedCharacterIndex = gameState.selectedCharacter;
    const hero = gameState.characters[selectedCharacterIndex];
    addHp({
      fromHp: hero.ch_hp,
      toHp: Math.min(hero.ch_hp + 20, hero.ch_max_hp),
      maxHp: hero.ch_max_hp,
      hpBar: hero.hp_bar,
    });
    gameState.phase = TurnPhase.ENEMY_TURN;
    turnMenager();
  }
}
