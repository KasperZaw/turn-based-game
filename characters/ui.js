export function createCharacter(character) {
    const character_div = document.createElement("div");
    const character_name = document.createElement("div");
    const character_hp = document.createElement("span");
    const characters_group = document.querySelector(".characters-group");
    const ch_img = document.createElement("img");

    character_name.textContent = character.ch_name;
    character_hp.textContent = character.ch_hp;
    ch_img.src = character.ch_img;

    character_div.classList.add("characters-div");

    character_div.append(character_name, character_hp, ch_img);
    characters_group.appendChild(character_div);

    // 🔥 TU JEST KLUCZ
    character.element = character_div;
    character.nameElement = character_name;
    character.imgElement = ch_img;
}
