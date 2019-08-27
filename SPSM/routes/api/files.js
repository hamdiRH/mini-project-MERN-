const express = require('express');
const router = express.Router();
const testFolder = './client/public/uploads';
const fs = require('fs');
const arr = []


router.get('/', (req, res) => {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            arr.push(file)

        });
        res.json(arr)
    });

})

module.exports = router;