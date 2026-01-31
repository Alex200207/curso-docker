
let times = 0;

const syncDd = () => {
    times++;
    console.log(`Syncing database... (Attempt ${times})`);
    return times
}

module.exports = syncDd;