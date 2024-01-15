const cluster = require('cluster');
const os = require('os');
const crypto = require('crypto');
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.status(200).send('Hi')
    })
} )

app.get('/fast', (req, res) => {
    res.status(200).send('Fast')
})

app.listen(4000, () => {
    console.log('app running on port 4000');
})

