export class Character {
  constructor(
    ch_class,
    ch_name,
    ch_hp,
    ch_max_hp,
    ch_mana,
    ch_dmg,
    ch_spell,
    ch_img,
    ch_id,
  ) {
    this.ch_class = ch_class;
    this.ch_name = ch_name;
    this.ch_hp = ch_hp;
    this.ch_mana = ch_mana;
    this.ch_dmg = ch_dmg;
    this.ch_spell = ch_spell;
    this.ch_img = ch_img;
    this.ch_id = ch_id;
    this.ch_max_hp = ch_max_hp;
  }

  takeDmg(amount) {
    this.ch_hp -= amount;
  }
  heal(amount) {
    if (this.ch_hp < this.ch_max_hp) {
      this.ch_hp += amount;
      console.log("enemy uleczonu");
    }
    console.log("bohater ma full hp");
  }
}
