import { Character } from "../characters/characters.js";

export const warrior = new Character(
  "Warrior",
  "Arthas",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./character.png",
  0,
);
export const mage = new Character(
  "Mage",
  "Cintri",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./character.png",
  1,
);
export const archer = new Character(
  "archer",
  "Legolas",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./character.png",
  2,
);
export const healer = new Character(
  "Healer",
  "Arthas",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./character.png",
  3,
);
export const character_arr = [warrior, mage, archer, healer];
