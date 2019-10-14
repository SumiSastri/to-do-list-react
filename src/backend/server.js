const express = require('express');
const app = express();
const port = 3001;

const getTodos = require('./api-todos');
app.get('/api/todos', (req, res) => res.send(getTodos()));

app.listen(port, () => console.log(`To do app listening on port ${port}!`));
