const cluster = require('cluster');
const os = require('os');
const express = require('express');



if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    const cpuCount = os.cpus().length;
    console.log(`Forking for ${cpuCount} CPUs`);
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }    
} else {
    
    const app = express();
    const doWork = (duration) => {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.status(200).send('Hi')
    } )

    app.get('/fast', (req, res) => {
        res.status(200).send('Fast')
    })

    app.listen(4000, () => {
        console.log('app running on port 4000');
    })
}