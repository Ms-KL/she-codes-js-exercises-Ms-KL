// https://gist.github.com/bloycey/a8f606fbeb950b13a4526a8a923de449

let todoTasksText = [];
let todoTasksStatus = [];

updateTodoList();

function addTask() {
	// Get the element <input id="new-task-text" type="text" placeholder="Todo task" />

	let newTask = document.getElementById("new-task-text");

	// If the field isn't empty (it has a value)
	if (newTask.value) {
		// Add the text to the global list (at the top of the file!)
		todoTasksText.push(newTask.value);

		// Give it the status of false (the task isn't done yet!)
		todoTasksStatus.push(false);

		// Reset the input to be blank
		newTask.value = "";
		console.log(todoTasksText);
		updateTodoList();
	}
}

function updateTodoList() {
	// Get this element <ul id="todo-list"></ul> and call it todoList
	let todoList = document.getElementById("todo-list");
	todoList.innerHTML = "";
	// Get the list of tasks. And do the function once for each task.
	todoTasksText.forEach((task, index) => {
		let newTodoTaskElement = createNewTodoItemElement(task, index);
		todoList.appendChild(newTodoTaskElement);
	});
}

function createNewTodoItemElement(task, index) {
	// Create a 'p' tag called newTodoTaskTextElement
	let newTodoTaskTextElement = document.createElement("p");

	// Inside the 'p' tag add the task text.
	newTodoTaskTextElement.innerText = task;

	if (todoTasksStatus[index] == true) {
		newTodoTaskTextElement.classList.add("complete");
	}

	// Create an 'li' element
	let newTodoTaskElement = document.createElement("li");

	// Put the 'p' element in the 'li' element
	newTodoTaskElement.appendChild(newTodoTaskTextElement);

	// Create a input with the type of button and a value of completed
	let completeButtonElement = document.createElement("input");
	completeButtonElement.type = "button";
	completeButtonElement.value = "Completed";

	// When the button is clicked do the toggleComplete function with the index of the task.
	// The index is where in the list the task appears, starting at 0.
	// E.g. The first item in the list has an index of 0, the next 1, the next 2, and so on.
	completeButtonElement.onclick = function () {
		toggleComplete(index);
	};

	// Add it to the end of the todo Task
	newTodoTaskElement.appendChild(completeButtonElement);

	// We now have <li><p>{the task}</p><input type="button" value="Completed"></input></li>
	// Put the whole thing inside the todoList
	return newTodoTaskElement;
}

function toggleComplete(index) {
	if (todoTasksStatus[index] == false) {
		todoTasksStatus[index] = true;
	} else {
		todoTasksStatus[index] = false;
	}
	updateTodoList();
}