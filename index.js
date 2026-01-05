import { character_arr } from "./characters/characters_list.js";
import { enemies_arr } from "./enemies/enemies_list.js";
import { gameManagerUi } from "./fightLogic/gameMenagerUi.js";
import "./router.js";
function index() {
  gameManagerUi(character_arr, enemies_arr);
}

index();
