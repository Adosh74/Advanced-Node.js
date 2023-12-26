const https = require('https');

const start = Date.now();
// send request to google
https.request('https://www.google.com', res => {
    res.on('date', ()=> {

    });

    res.on('end', () => {
        console.log('Time',Date.now() - start);
    });
}).end();