const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

auth.onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    loadTasks(user.uid);
  }
});

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click(); 
  }
});

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const user = auth.currentUser;
  db.ref("users/" + user.uid + "/tasks").push({
    text: task,
    createdAt: Date.now(),
  });

  taskInput.value = "";
}

function loadTasks(uid) {
  const userTasksRef = db.ref("users/" + uid + "/tasks");
  userTasksRef.on("value", (snapshot) => {
    taskList.innerHTML = "";
    snapshot.forEach((childSnapshot) => {
      const taskData = childSnapshot.val();
      const taskId = childSnapshot.key;

      const li = document.createElement("li");
      li.textContent = taskData.text;

      // Right-click to delete
      li.addEventListener("contextmenu", (e) => {
        e.preventDefault(); // prevent the default context menu
        userTasksRef.child(taskId).remove();
      });

      taskList.appendChild(li);
    });
  });
}


function logout() {
  auth.signOut().then(() => (window.location.href = "index.html"));
}
