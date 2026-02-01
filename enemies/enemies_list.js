import { Enemy } from "./enemies.js";

export const ork = new Enemy(
  "ork",
  "dd",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./assets/img/enemy/ork.png",
  0,
);
export const goblin = new Enemy(
  "Elf",
  "xx",
  120,
  120,
  30,
  15,
  "Shield Slam",
  "./assets/img/enemy/goblin.png",
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
  "./assets/img/enemy/druid.png",
  2,
);
ork.images.attack = "./assets/img/enemy/ork_attack.png";
goblin.images.attack = "./assets/img/enemy/goblin_attack.png";
druid.images.attack = "./assets/img/enemy/druid_attack.png";
export const enemies_arr = [ork, goblin, druid];
