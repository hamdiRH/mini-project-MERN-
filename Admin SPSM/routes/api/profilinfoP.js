const express = require('express');
const router = express.Router();



const Prof = require('../../models/Prof')


router.get('/', (req, res) => {
    Prof.find()
        .then(user => res.json(user));
});


module.exports = router;