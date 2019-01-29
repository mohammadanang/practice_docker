const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');

var config = {
    user: 'postgres',
    database: 'practice_docker',
    password: 'password',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get('/', (req, res) => res.status(200).send('Hello'));

server.get('/pool', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) {
            res.status(400).send(err);
        }

        res.status(200).send('Connect to postgres');
    });
});