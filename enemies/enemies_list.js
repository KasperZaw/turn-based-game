import { Enemy } from "./enemies.js";

export const ork = new Enemy (
    "ork",
    "dd",
    120,
    30,
    15,
    "Shield Slam",
    "./enemy.png"
)
export const elf = new Enemy (
    "Elf",
    "xx",
    120,
    30,
    15,
    "Shield Slam",
    "./enemy.png"
)
export const druid = new Enemy (
    "druid",
    "ff",
    120,
    30,
    15,
    "Shield Slam",
    "./enemy.png"
)
export const enemies_arr = [ork, elf, druid];
