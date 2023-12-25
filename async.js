const https = require('https');

const start = Date.now();

https.request('https://www.google.com', res => {
    res.on('date', ()=> {

    });

    res.on('end', () => {
        console.log('Time',Date.now() - start);
    });
}).end();