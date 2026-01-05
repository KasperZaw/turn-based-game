export function createEnemy(enemy) {
  const enemy_div = document.createElement("div");
  const enemy_name = document.createElement("div");
  const enemy_hp = document.createElement("span");
  const enemy_img = document.createElement("img");

  const enemies_group = document.querySelector(".enemies-group");

  enemy_name.textContent = enemy.e_name;
  enemy_hp.textContent = enemy.e_hp;
  enemy_img.src = enemy.e_img;
  enemy_img.alt = enemy.e_name;

  enemy_div.classList.add("enemy-div");
  enemy_div.append(enemy_name, enemy_hp, enemy_img);

  enemies_group.appendChild(enemy_div);
  enemy.enemyImg = enemy_img;
  enemy.dom = enemy_div;
}
