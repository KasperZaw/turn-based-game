export function createCharacter(character) {
  const character_div = document.createElement("div");
  const character_name = document.createElement("div");
  const character_hp = document.createElement("span");
  const characters_group = document.querySelector(".characters-group");
  const ch_img = document.createElement("img");
  const hp_bar = document.createElement("div");
  const hp_bar_bg = document.createElement("div");

  hp_bar.classList.add("hp-bar");
  hp_bar_bg.classList.add("hp-bar-bg");
  character_name.textContent = character?.ch_name;
  character_hp.textContent = character.ch_hp;
  ch_img.src = character.ch_img;
  hp_bar_bg.append(hp_bar);
  hp_bar.append(character_hp);

  character_div.classList.add("characters-div");

  character_div.append(character_name, hp_bar_bg, ch_img);
  characters_group.appendChild(character_div);

  // 🔥 TU JEST KLUCZ
  character.element = character_div;
  character.nameElement = character_name;
  character.imgElement = ch_img;
  character.hp_bar = hp_bar;

  return {
    element: character_div,
    nameElement: character_name,
    imgElement: ch_img,
    hpBar: hp_bar,
    hpText: character_hp,
  };
}
