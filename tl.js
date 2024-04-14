document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get form values
    var taskName = document.getElementById("task-name").value;
    var deadline = document.getElementById("deadline").value;
    var priority = document.getElementById("priority").value;
    var label = document.getElementById("label").value;

    // Create task object
    var task = {
        name: taskName,
        deadline: deadline,
        priority: priority,
        label: label
    };

    // Add task to the to-do list
    addTask(task);

    // Clear form fields
    document.getElementById("task-name").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("label").value = "";
});

// Function to add tasks to the to-do list
function addTask(task) {
    var todoList = document.getElementById("todo-list");
    var listItem = document.createElement("li");
    listItem.className = "task priority-" + task.priority;

    var taskDetails = "<strong>" + task.name + "</strong>";
    taskDetails += " | Deadline: " + task.deadline;
    taskDetails += " | Priority: " + task.priority;
    taskDetails += " | Label: " + task.label;

    listItem.innerHTML = taskDetails;
    todoList.appendChild(listItem);
}
