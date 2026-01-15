export function createEnemy(enemy) {
  const enemy_div = document.createElement("div");
  const enemy_name = document.createElement("div");
  const enemy_hp = document.createElement("span");
  const enemy_img = document.createElement("img");
  const hp_bar = document.createElement("div");
  const hp_bar_bg = document.createElement("div")
  const enemies_group = document.querySelector(".enemies-group");

  enemy_name.textContent = enemy.e_name;
  enemy_hp.textContent = enemy.e_hp;
  enemy_img.src = enemy.e_img;
  hp_bar.appendChild(enemy_hp)
  hp_bar.classList.add("hp-bar-enemy");
  hp_bar_bg.classList.add("hp-bar-bg-enemy")
  hp_bar_bg.appendChild(hp_bar);
  enemy_div.classList.add("enemy-div");
  enemy_div.append(enemy_name, hp_bar_bg, enemy_img);

  enemies_group.appendChild(enemy_div);
  enemy.enemyImg = enemy_img;
  enemy.dom = enemy_div;
  enemy.hp_bar = hp_bar;
}
export function createCharacter(character) {
  const character_div = document.createElement("div");
  const character_name = document.createElement("div");
  const character_hp = document.createElement("span");
  const characters_group = document.querySelector(".characters-group");
  const ch_img = document.createElement("img");



  hp_bar.classList.add("hp-bar");
  hp_bar_bg.classList.add("hp-bar-bg")
  character_name.textContent = character?.ch_name;
  character_hp.textContent = character.ch_hp;
  ch_img.src = character.ch_img;
  hp_bar_bg.append(hp_bar)
  hp_bar.append(character_hp)

  character_div.classList.add("characters-div");

  character_div.append(character_name, hp_bar_bg, ch_img);
  characters_group.appendChild(character_div);

  // 🔥 TU JEST KLUCZ
  character.element = character_div;
  character.nameElement = character_name;
  character.imgElement = ch_img;

  return {
    element: character_div,
    nameElement: character_name,
    imgElement: ch_img,
    hpBar: hp_bar,
    hpText: character_hp
  };
}

