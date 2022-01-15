const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const TODOS = [
  {
    id: 1,
    status: 'Done',
    text: 'Drink coffie',
  },
  {
    id: 2,
    status: 'Done',
    text: 'Watch youtube',
  },
  {
    id: 3,
    status: 'In Process',
    text: 'Chill',
  },
];

app.get('/todos', function(req, res) {
  console.log(`GET ${req.url}`);
  res.send(TODOS);
});

app.patch('/todos/:id', function(req, res) {
  console.log(`PATCH ${req.url} with PARAMS id = ${req.params.id}`);

  const todosIndex = TODOS.findIndex((user) => user.id === req.params.id);
  if (todosIndex === -1) {
    return res.sendStatus(404);
  }

  TODOS[todosIndex] = { ...req.body };
  res.json(TODOS[todosIndex]);
});

const port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log(`Server listening port ${port}`);
});
