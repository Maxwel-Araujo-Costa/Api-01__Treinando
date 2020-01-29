const express = require("express");
var cors = require("cors");
const server = express();

server.use(express.json());

server.use(cors());

const alunos = [
  {
    nome: "Felipe"
  },
  {
    nome: "Lucas"
  },
  {
    nome: "Gustavo"
  }
];
server.get("/users", (req, res) => {
  res.send(alunos);
});

server.get("/users/:index", (req, res) => {
  console.log(req.params);
  const { index } = req.params;

  return res.json({ user: users[index] });
});

server.post("/users", (req, res) => {
  const { name } = req.body;
  console.log(name);

  alunos.push({ nome: name });
});

server.put("/users", (req, res) => {
  const { id } = req.query;
  console.log({ id });
  const { name } = req.body;
  console.log({ name });
  /*alunos.splice(1, 1, name);*/
  /*alunos.put({ nome: name });*/
  /*alunos.put[name] = name;*/
  alunos[id].nome = name;
  res.send(alunos);
});
/*
server.patch("/users", (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  const { name } = req.body;*/
/*alunos.splice(id, 1, name);*/
/*alunos[id] = name;*/
/*alunos.patch[id] = name;*/
/* res.send(alunos);
}); */

server.delete("/users", (req, res) => {
  const { id } = req.body;
  console.log({ id });
  alunos.splice(id, 1);
  res.send(alunos);
});

/*server.put("/users", (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  const { name } = req.body;
  users[id] = name;
  return res.json({ users });
}); */
server.listen(3000);
