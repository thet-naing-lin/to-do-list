import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
  //   console.log("I'm observer");

  // i'll watch the list group
  const job = () => {
    // console.log("you change in list group");
    updateTaskTotal();
    updateDoneTaskTotal();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };

  const listGroupObserver = new MutationObserver(job);

  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
