export default {
  getTasks: (callback) => {
    fetch("http://localhost:3001/api/tasks").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },
  getProject(callback) {
    fetch("http://localhost:3001/api/project").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },
  createTask(criacao, callback) {
    fetch(`http://localhost:3001/api/tasks/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(criacao),
    }).then((response) => {
      callback(response);
    });
  },
  createProject(obj) {
    fetch("http://localhost:3001/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  },
  deleteTasks: (id, callback) => {
    fetch(`http://localhost:3001/api/tasks/${id}`, { method: "DELETE" }).then(
      (response) => {
        callback(response);
      }
    );
  },
  criarUsuario(dadosUsuario) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosUsuario),
    });
  },
  logar(callback) {
    fetch("http://localhost:3000/users").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },

  deleteProject: (id, callback) => {
    fetch(`http://localhost:3001/api/project/${id}`, { method: "DELETE" }).then(
      (response) => {
        callback(response);
      }
    );
  },
  EditTasks(id, parametroSinal, callback) {
    fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parametroSinal),
    }).then((response) => {
      callback(response);
    });
  },
};
