const express = require('express');

const app = express();

const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
    doWork(5000);
    res.status(200).send('Hi')
} )

app.listen(4000, () => {
    console.log('app running on port 4000');
})