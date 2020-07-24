function handleInputKey(e) {
  // console.log(`- handleInputKey `, e);
  if (e.keyCode === 13) {
    handleAddTodoEvent(e);
  }
}

function getInputValue() {
  let oInput = document.querySelector(".input-trigger");
  return oInput.target.value;
}

// ## 行为
// 1. add todo
function handleAddTodoEvent(e) {
  console.log(`- handleAddTodoEvent `, e);
}

// 2. check todo
function handleCheckTodoEvent(e) {
  console.log(`- handleCheckTodoEvent `, e);
}

// 3. uncheck todo
function handleUncheckTodoEvent(e) {
  console.log(`- handleUncheckTodoEvent `, e);
}

// 4. remove todo
function handleRemoveTodoEvent(e) {
  console.log(`- handleRemoveTodoEvent `, e);
}
