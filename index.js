const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');
pg.connect('postgres://postgres:password@localhost:5432/practice_docker');

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get('/', (req, res) => res.status(200).send('Hello'));