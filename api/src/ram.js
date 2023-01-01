const { exec } = require("child_process");
const dataIO = require('./dataio');

// Memory command
const ramCmd = "free --mega";
const ramRegex= /Mem:\s*(?<total>\d+)\s*(?<used>\d+)\s*(?<free>\d+)\s*(?<shared>\d+)\s*(?<cache>\d+)\s*(?<available>\d+)/;

const writeRam = () => {
    exec(ramCmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        const ram = stdout.match(ramRegex);
        const { free, used, available, cache, total } = ram.groups;
        dataIO.writeMemory(`${free} ${used} ${available} ${cache} ${total}`);
    });
}

const ramIntervalId = setInterval(() => {
    writeRam();
}, 1 * 1000 * 60);

module.exports = ramIntervalId;
