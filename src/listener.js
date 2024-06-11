import {
  addTaskBtnHandler,
  deleteAllHandler,
  doneAllHandler,
  listGroupHandler,
  textInputHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  deleteAll,
  doneAll,
  listGroup,
  textInput,
} from "./selectors.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  textInput.addEventListener("keyup", textInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listener;
