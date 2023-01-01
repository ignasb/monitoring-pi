const fs = require('fs');

class DataIO {
    TEMPERATURE_PATH = '../data/temp';
    RAM_PATH = '../data/ram';

    getCurrentTimestamp() {
        return new Date().toISOString();
    }

    writeLineToFile(path, data, errorCb) {
        fs.writeFile(path, data + '\n', { flag: 'a+' }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(fs.readFileSync(path, "utf8"));
            }
        });
    }

    writeTemperature(temp) {
        const ts = this.getCurrentTimestamp();
        this.writeLineToFile(this.TEMPERATURE_PATH,`${ts} ${temp}`);
    }

    writeMemory(ram) {
        const ts = this.getCurrentTimestamp();
        this.writeLineToFile(this.RAM_PATH, `${ts} ${ram}`);
    }

    readTemperature(callback) {
        fs.readFile(`${__dirname}/${this.TEMPERATURE_PATH}`, 'utf8', (err, data) => {
            if (err) {
                return callback(err);
            }

            callback(null, data);
        });
    }

    readMemory(callback) {
        fs.readFile(`${__dirname}/${this.RAM_PATH}`, 'utf8', (err, data) => {
            if (err) {
                return callback(err);
            }

            callback(null, data);
        });
    }
}

const dataIO = new DataIO();

module.exports = dataIO;
