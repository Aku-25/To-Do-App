let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '17/07/2024'
  },
  {
    item: 'Go to College',
    dueDate: '17/07/2024'
  }
];
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if(todoItem === ''){
      alert('Please Fill Your Data');
      return;
    }
    if(todoDate === ''){
      alert('Please Select a Due Date');
      return;
    }
    let today=new Date();
    let dueDate= new Date(todoDate);
    if(dueDate < today ){
      alert('Please select a future date');
      return;
    }
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
