import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export const tasks = ["eat", "sleep", "walk"];

// action (Business logic)
export const updateTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

export const updateDoneTaskTotal = () => {
  // count list and update
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

// create new list
const createNewList = (currentTask) => {
  // clone the template tag
  const list = listTemplate.content.cloneNode(true);
  // console.log(list);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;

  return list;
};

export const delList = (listId) => {
  // console.log("U del");
  const currentList = document.querySelector(`#${listId}`);
  // console.log(currentList);
  // Del Button
  // if (window.confirm("Are you sure to delete?")) {
  //   currentList.className = "animate__animated animate__bounceOut";
  //   currentList.addEventListener("animationend", () => {
  //     currentList.remove();
  //     // updateDoneTaskTotal();
  //     // updateTaskTotal();
  //   });
  // }

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.className = "animate__animated animate__bounceOut";
      currentList.addEventListener("animationend", () => {
        currentList.remove();
      });
    }
  });
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  // console.log("U edit");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  // Edit Button
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-900 px-2 py-1 w-[270px] font-body focus-visible:outline-none";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus(); // put cursor in input box
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    // console.log("finish edit");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });

  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");
      // console.log("finish edit");
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  // console.log("U check");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  // Check Button
  // console.log(currentTask + ": Task done");
  listTask.classList.toggle("line-through");
  currentList.classList.toggle("opacity-20");
  currentList.classList.toggle("scale-95");
  currentList.classList.add("duration-500");

  // console.log(listDoneCheck.checked);
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }

  // updateDoneTaskTotal();
};

export const addList = (text) => {
  //   console.log(textInput.value);

  // mount list to list group
  listGroup.append(createNewList(text));
  textInput.value = null;

  // updateTaskTotal();
};
