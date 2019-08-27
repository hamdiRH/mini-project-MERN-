const express = require('express');
const router = express.Router();

const Feature = require('../../models/Features');


// @route   GET api/features
// @desc    Get All features
// @access  Public
router.get('/', (req, res) => {
    Feature.find()

        .then(features => res.json(features));
});



// @route   POST api/features
// @desc    Create An features
// @access  Public
router.post('/', (req, res) => {
    const newfeature = new Feature({
        img: req.body.img,
        title: req.body.title,
        ctn: req.body.ctn
    });

    newfeature.save().then(item => res.json(item));
});

module.exports = router;