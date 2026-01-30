const cron = require('node-cron');

let times = 0

// corre cada segundo lo que esta dentro
cron.schedule('1-59/5 * * * * *', () => {
    times++
  console.log('tick cada 5 segundos ejecuta times: ', times);
});


console.log('Inicio')