const data = require("../data");

module.exports = {
  find: (req, res) => {
    const { id } = req.params;
    if (id != undefined) {
      const project = data.projects.find((t) => t.id == id);
      if (!project) {
        res.status(404).end();
        return;
      }
      res.send(project);
      return;
    }
    res.send(data.projects);
  },
  add: (req, res) => {
    const { nome } = req.body;
    const id = data.projects.length + 1;
    const newProject = {
      id,
      nome,
    };
    data.projects.push(newProject);
    res.send(newProject);
  },
  remove: (req, res) => {
    const { id } = req.params;
    const task = data.projects.find((t) => t.id === id);
    const index = data.projects.indexOf(task);
    data.projects.splice(index, 1);
    res.send(task);
  },
};
