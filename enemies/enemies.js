export class Enemy {
  constructor(
    e_class,
    e_name,
    e_hp,
    e_max_hp,
    e_dmg,
    e_mana,
    e_special_attack,
    e_img,
    e_id,
  ) {
    this.e_class = e_class;
    this.e_name = e_name;
    this.e_hp = e_hp;
    this.e_max_hp = e_max_hp;
    this.e_dmg = e_dmg;
    this.e_mana = e_mana;
    this.e_special_attack = e_special_attack;
    this.e_img = e_img;
    this.e_id = e_id;
    this.images = {
      stand: e_img,
      attack: null,
      dead: null,
    }
  }
  takeDmg(amount) {
    this.e_hp -= amount;
  }
  isAlive() {
    return this.e_hp > 0;
  }
  setVisualState(state) {
    const src = this.images[state];
    if (!src || !this.enemyImg) return;
    this.enemyImg.src = src;
  }
}
