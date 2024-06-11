import { addList, tasks } from "./list.js";

const initialRender = () => {
    // console.log("initial render started");
    tasks.forEach((task) => addList(task));
}

export default initialRender;