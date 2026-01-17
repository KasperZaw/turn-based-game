import { Enemy } from "./enemies.js";

export const ork = new Enemy(
  "ork",
  "dd",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./enemy.png",
  0,
);
export const elf = new Enemy(
  "Elf",
  "xx",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./enemy.png",
  1,
);
export const druid = new Enemy(
  "druid",
  "ff",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./enemy.png",
  2,
);
export const enemies_arr = [ork, elf, druid];
