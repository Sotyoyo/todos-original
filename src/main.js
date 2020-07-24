function handleInputKey(e) {
  if (e.keyCode === 13) {
    handleAddTodoEvent(e);
  }
}

function getInputValue() {
  let oInput = document.querySelector(".input-trigger");
  return oInput.value;
}

function clearInput() {
  let oInput = document.querySelector(".input-trigger");
  oInput.value = "";
}

function createCheckbox() {
  let oCheckbox = document.createElement("input");
  oCheckbox.setAttribute("type", "checkbox");
  oCheckbox.className = "check-trigger";
  oCheckbox.onclick = handleCheckTodoEvent;
  return oCheckbox;
}

function createEventContent(text) {
  let oP = document.createElement("p");
  oP.innerText = text;
  oP.className = "event-content";
  return oP;
}

function createDeleteButton() {
  let oDelete = document.createElement("input");
  oDelete.setAttribute("type", "button");
  oDelete.className = "delete-trigger";
  oDelete.value = "x";
  oDelete.onclick = handleRemoveTodoEvent;
  return oDelete;
}

function createOneTodoEvent() {
  let id = new Date().getTime();
  let oLi = document.createElement("li");
  oLi.setAttribute("data-id", id);
  let oCheckbox = createCheckbox();
  let oContent = createEventContent(getInputValue());
  let oDelete = createDeleteButton();
  oLi.appendChild(oCheckbox);
  oLi.appendChild(oContent);
  oLi.appendChild(oDelete);
  return oLi;
}

// ## 行为
// 1. add todo
function handleAddTodoEvent(e) {
  let oLi = createOneTodoEvent();
  let oList = document.querySelector("ul");
  oList.appendChild(oLi);
  clearInput();
}

// 2. check todo
function handleCheckTodoEvent(e) {
  let checked = e.target.checked;
  let parentNode = e.target.parentNode;
  if (checked) {
    parentNode.classList.add("completed");
  } else {
    parentNode.classList.remove("completed");
  }
}

// 3. remove todo
function handleRemoveTodoEvent(e) {
  let parentNode = e.target.parentNode;
  let grandParentNode = parentNode.parentNode;
  grandParentNode.removeChild(parentNode);
}
