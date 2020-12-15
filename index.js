const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./DBConnection');
const postsAPI = require('./postsAPI');

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/posts',postsAPI)
// app.use('/users',postsAPI)


const PORT = 3000;

app.listen(PORT, () => {console.log(`Server Started at ${PORT}`)});