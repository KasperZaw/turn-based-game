import { character_arr } from "./characters/characters_list.js";
import { enemies_arr } from "./enemies/enemies_list.js";
import { playerMenuUi } from "./fightLogic/playerMenuUi.js";
import "./router.js"
function index() {
   playerMenuUi(character_arr,enemies_arr);
}

index();