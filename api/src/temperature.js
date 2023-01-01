const { exec } = require("child_process");
const dataIO = require('./dataio');

// Temperature command
const tempCmd = "vcgencmd measure_temp";
const tempRegex= /\b\d+\.?\d*'?\w+?\b/;

const writePiTemperature = () => {
    exec(tempCmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        const temp = stdout.match(tempRegex);
        dataIO.writeTemperature(temp);
    });
}

const tempIntervalId = setInterval(() => {
    writePiTemperature();
}, 1* 1000 * 60);

module.exports = tempIntervalId;
