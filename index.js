const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hi')
} )

app.listen(4000, () => {
    console.log('app running on port 4000');
})