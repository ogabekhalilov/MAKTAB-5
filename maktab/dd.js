// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskList = document.getElementById('taskList');

//     if (taskInput.value.trim() !== '') {
//         const taskText = document.createTextNode(taskInput.value);
//         const deleteButton = document.createElement('button');
//         deleteButton.appendChild(document.createTextNode('Удалить'));
//         deleteButton.onclick = function () {
//             taskList.removeChild(taskItem);
//         };

//         const taskItem = document.createElement('li');
//         taskItem.appendChild(taskText);
//         taskItem.appendChild(deleteButton);
//         taskList.appendChild(taskItem);

//         taskInput.value = '';
//     }
// }
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    if (username === 'ogabek' && password === '2009') {
      
        errorMessage.textContent = '';
        window.location.href = 'SDffd.html';
    } 
    if (username === 'maktab' && password === 'maktab') {
      
        errorMessage.textContent = '';
        window.location.href = 'index.html';
    }
    else {
        ErrorEvent
        
        errorMessage.textContent = 'Неверный логин или пароль';
    }
}
let cont = document.querySelector(".contauner")

const Cl = () =>{
    cont.style.left = "-1000px"
}