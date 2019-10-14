const express = require('express');
const app = express();
const port = 3000;

const getTodos = require('./api-todos');
app.get('/api/todos', (req, res) => res.send(getTodos()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
