const express = require("express");
const app = express();

const projects = [];

let count = 0;

app.use(express.json());

function checkProjectExist(req, res, next) {
  const { id } = req.params;

  const data = projects.find(item => item.id === id);

  if (!data) {
    return res.status(400).json({ message: "project not found" });
  }

  next();
}

function checkRequisition(req, res, next) {
  count++;

  console.log(`Requisições: ${count}`);

  next();
}

app.use(checkRequisition);

app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.put("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const data = projects.find(item => item.id === id);

  data.title = title;

  return res.json(data);
});

app.delete("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;

  const data = projects.findIndex(item => item.id === id);

  projects.splice(data, 1);

  return res.send();
});

app.post("/projects/:id/tasks", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const data = projects.find(item => item.id === id);

  data.tasks.push(title);

  return res.json(data);
});

app.listen(3000);
