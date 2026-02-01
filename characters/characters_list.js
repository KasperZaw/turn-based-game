import { Character } from "../characters/characters.js";


export const mage = new Character(
  "Mage",
  "Cintri",
  20,
  20,
  30,
  15,
  "Shield Slam",
  "./assets/img/charactersImg/mage.png",
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
  "./assets/img/charactersImg/archer.png",
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
  "./assets/img/charactersImg/healer.png",
  3,
);
export const warrior = new Character(
  "Warrior",
  "Arthas",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./assets/img/charactersImg/warrior.png",
  0,
);
export const character_arr = [healer, archer, mage ,warrior];

warrior.images.attack = "/assets/img/charactersImg/warrior_animation.png";
mage.images.attack = "/assets/img/charactersImg/mage_animation.png";
archer.images.attack = "/assets/img/charactersImg/archer_animation.png";
healer.images.attack = "/assets/img/charactersImg/healer_animation.png";
