export function createEnemy(enemy) {
  const enemy_div = document.createElement("div");
  const enemy_name = document.createElement("div");
  const enemy_hp = document.createElement("span");
  const enemy_img = document.createElement("img");
  const hp_bar = document.createElement("div");
  const hp_bar_bg = document.createElement("div");
  const enemies_group = document.querySelector(".enemies-group");

  enemy_name.textContent = enemy.e_name;
  enemy_hp.textContent = enemy.e_hp;
  enemy_img.src = enemy.e_img;
  hp_bar.appendChild(enemy_hp);
  hp_bar.classList.add("hp-bar-enemy");
  hp_bar_bg.classList.add("hp-bar-bg-enemy");
  hp_bar_bg.appendChild(hp_bar);
  enemy_div.classList.add("enemy-div");
  enemy_div.append(enemy_name, hp_bar_bg, enemy_img);

  enemies_group.appendChild(enemy_div);
  enemy.enemyImg = enemy_img;
  enemy.dom = enemy_div;
  enemy.hp_bar = hp_bar;
  enemy.enemy_hp = enemy_hp;
}
