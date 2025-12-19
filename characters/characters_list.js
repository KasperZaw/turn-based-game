import { Character } from "../characters/characters.js";

export const warrior = new Character(
    "Warrior",
    "Arthas",
    120,
    30,
    15,
    "Shield Slam",
    "./character.png"
)
export const mage = new Character(
    "Mage",
    "Cintri",
    120,
    30,
    15,
    "Shield Slam",
    "./character.png"
)
export const archer = new Character(
    "archer",
    "Legolas",
    120,
    30,
    15,
    "Shield Slam",
    "./character.png"
)
export const healer = new Character(
    "Healer",
    "Arthas",
    120,
    30,
    15,
    "Shield Slam",
    "./character.png"
)
export const character_arr = [warrior, mage, archer, healer];
