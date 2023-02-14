// https://gist.githubusercontent.com/bloycey/1d3a55f8648ef12b8e66da2e863e97f6/raw/83bd191e5eeb85fc3f7d3fed6ba094b8282aaad8/script.js

function addTask() {
	const toDoList = document.getElementById("todo-list");
	const input = document.getElementById("new-task-text");
	const value = input.value;
	const newTask = `<li><p>${value}</p><input type="button" onclick="toggleStatus(event)"></input></li>`;
	toDoList.innerHTML += newTask;
	input.value = '';
}

function toggleStatus(event) {
	const text = event.target.previousSibling;
	text.classList.toggle('complete');
}