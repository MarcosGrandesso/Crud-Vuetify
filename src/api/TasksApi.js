import axios from "axios";
import api from "@/api";
axios.defaults.baseURL = "http://localhost:3001/api";
export default {
  getTasks(cb) {
    api
      .get("/api/tasks")
      .then((response) => {
        cb(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  //getproj pegando
  getProject(callback) {
    fetch("http://localhost:3001/api/project").then((res) => {
      res.json().then((response) => {
        callback(response);
      });
    });
  },
  createTask(criacao) {
    api.post("http://localhost:3001/api/tasks", criacao);
  },
  //creteproj pegando
  createProject(obj) {
    fetch("http://localhost:3001/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  },

  deleteTasks: (id, callback) => {
    api.delete(`http://localhost:3001/api/tasks/${id}`).then((response) => {
      callback(response);
    });
  },
  // criarUsuario(dadosUsuario) {
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(dadosUsuario),
  //     }); tirei isso pq substitui pelo do roger login
  //
  // },
  // logar(callback) {
  //   fetch("http://localhost:3000/users").then((res) => {
  //     res.json().then((response) => {
  //       callback(response);
  //     }); tirei isso pq substitui pelo do roger login
  //   });
  // },
  //deleteproj pegando
  deleteProject: (id, callback) => {
    fetch(`http://localhost:3001/api/project/${id}`, { method: "DELETE" }).then(
      (response) => {
        callback(response);
      }
    );
  },

  EditTasks(id, parametroSinal, cb) {
    api
      .post(`/api/tasks/${id}`, parametroSinal)
      .then((response) => {
        cb(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  // alteraçoes de estado nas tasks
  toPending(tarefa) {
    tarefa.status = "pending";
    api
      .post(`http://localhost:3001/api/tasks/${tarefa.id}`, tarefa)
      .then(() => {});
  },
  toProgress(tarefa) {
    tarefa.status = "progress";
    api
      .post(`http://localhost:3001/api/tasks/${tarefa.id}`, tarefa)
      .then(() => {});
  },
  toDone(tarefa) {
    tarefa.status = "done";
    api
      .post(`http://localhost:3001/api/tasks/${tarefa.id}`, tarefa)
      .then(() => {});
  },
};
