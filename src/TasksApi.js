export default {
  getTasks: (callback) => {
    fetch("http://localhost:3000/tasks").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },
  getProject(callback) {
    fetch("http://localhost:3000/projetos").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },
  createTask(criacao, callback) {
    fetch(`http://localhost:3000/tasks/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(criacao),
    }).then((response) => {
      callback(response);
    });
  },
  deleteTasks: (id, callback) => {
    fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(
      (response) => {
        callback(response);
      }
    );
  },
};
