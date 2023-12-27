const https = require('https');

const start = Date.now();

const doRequest = () => {
    https.request('https://www.google.com', res => {
        res.on('data', () => {})
    
        res.on('end', () => {
            console.log('time', Date.now() - start);
        })
    }).end()
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()