const express = require('express');
const router = express.Router();
const dataIO = require('../src/dataio');

/*
 * Temperature metric
 */
router.get('/temperature', (req, res, next) => {
    dataIO.readTemperature((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(transformTempRawDataToJson(data));
        }
    });
});

const transformTempRawDataToJson = (rawData) => {
    const data = rawData.split('\n')
        .filter(row => !!row)
        .map((row) => {
            const [ts, value] = row.split(/\s+/);
            return { ts, value };
        });

    return JSON.stringify(data);
};
/*
 * Ends temperature metric
 */


/*
 * Memory metric
 */
router.get('/memory', (req, res, next) => {
    dataIO.readMemory((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(transformMemRawDataToJson(data));
        }
    });
});

const transformMemRawDataToJson = (rawData) => {
    const data = rawData.split('\n')
        .filter((row) => !!row)
        .map((row) => {
            const [ts, free, used, available, cache, total] = row.split(/\s+/);
            return { ts, free, used, available, cache, total };
        });

    return JSON.stringify(data);
};

/*
 * Ends temperature metric
 */
module.exports = router;
