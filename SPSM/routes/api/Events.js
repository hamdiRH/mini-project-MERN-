const express = require('express');
const router = express.Router();


const Event = require('../../models/Events');

router.get('/', (req, res) => {
    Event.find()
        .then(items => res.json(items));
});


router.post('/', (req, res) => {
    const { name, img, ctn } = req.body
    const newEvent = new Event({
        name, img, ctn
    })
    newEvent.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
