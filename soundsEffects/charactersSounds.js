const sounds = {
  dagger: new Audio("./assets/sounds/dagger.mp3"),
  arrow: new Audio("./assets/sounds/arrow.mp3"),
  druid_spell: new Audio("./assets/sounds/druid-spell.mp3"),
  fire_spell: new Audio("./assets/sounds/fire-spell.mp3"),
  healer_spell: new Audio("./assets/sounds/healer-spell.mp3"),
  sword: new Audio("./assets/sounds/sword.mp3"),
};

export function playSound(soundName) {
  const sound = sounds[soundName];
  if (!soundName) return;

  sound.play();
  console.log("dzwiek dziala");
}
