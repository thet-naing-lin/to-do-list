import Swal from "sweetalert2";
import {
  addList,
  delList,
  doneList,
  editList,
  updateDoneTaskTotal,
  updateTaskTotal,
} from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  // select the list from the child
  const list = event.target.closest(".list");

  // console.log(list);
  // console.log(event.target.classList.contains("list-edit-btn"));

  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-del-btn")) {
    // console.log(event.target.closest(".list").id);
    delList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

// event ခေါ်တဲ့ချိန်တန်းပီး invoke မလုပ်အောင် handler ဆိုတဲ့ function ထပ်ဆောက်ပေးလိုက်တယ်။
export const addTaskBtnHandler = () => {
  // console.log(textInput.value.trim() ? true : false);
  if (textInput.value.trim()) {
    addList(textInput.value);
  } else {
    Swal.fire({
      title: "Error!",
      text: "You must input first!",
      icon: "error",
    });
  }
};

export const textInputHandler = (event) => {
  // console.log(event);
  if (event.key === "Enter" && textInput.value.trim()) {
    addList(textInput.value);
  } else if (event.key === "Enter" && !textInput.value.trim()) {
    Swal.fire({
      title: "Error!",
      text: "You must input first!",
      icon: "error",
    });
  }
  // if (event.key === "Enter") {
  //   if (textInput.value.trim()) {
  //     addList(textInput.value);
  //   } else {
  //     alert("You must input first");
  //   }
  // }
};

export const deleteAllHandler = () => {
  // if (confirm("Are you sure to delete all you lists?")) {
  //   const allLists = listGroup.querySelectorAll(".list");
  //   // console.log(allLists);
  //   allLists.forEach((list) => {
  //     list.remove();
  //     // updateDoneTaskTotal();
  //     // updateTaskTotal();
  //   });

  //   // listGroup.className = "animate__animated animate__bounceOut";
  //   // listGroup.addEventListener("animationend", () => {
  //   //   allLists.forEach((list) => {
  //   //     list.remove();
  //   //     updateDoneTaskTotal();
  //   //     updateTaskTotal();
  //   //   });
  //   // });
  // }

  Swal.fire({
    title: "Are you sure to delete all?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete All!",
  }).then((result) => {
    if (result.isConfirmed) {
      const allLists = listGroup.querySelectorAll(".list");
      // console.log(allLists);
      allLists.forEach((list) => {
        list.remove();
      });
    }
  });
};

export const doneAllHandler = () => {
  // if (confirm("Are you sure to checked all you lists?")) {
  //   const allLists = listGroup.querySelectorAll(".list");
  //   // console.log(allLists);
  //   allLists.forEach((list) => {
  //     list.querySelector(".list-done-check").checked = true;
  //     doneList(list.id);
  //     updateDoneTaskTotal();
  //   });
  //   // doneAll.childNodes[2].nodeValue = "Unchecked All";
  // }

  Swal.fire({
    title: "Are you sure to checked all lists?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Done All!",
  }).then((result) => {
    if (result.isConfirmed) {
      const allLists = listGroup.querySelectorAll(".list");
      allLists.forEach((list) => {
        list.querySelector(".list-done-check").checked = true;
        doneList(list.id);
        updateDoneTaskTotal();
      });
    }
  });
};
