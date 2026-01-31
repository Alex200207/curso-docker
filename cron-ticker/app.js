const cron = require('node-cron');
const syncDd = require('./tasks/sync-db');
console.log('Inicio')

// corre cada segundo lo que esta dentro
cron.schedule('1-59/5 * * * * *',syncDd);

