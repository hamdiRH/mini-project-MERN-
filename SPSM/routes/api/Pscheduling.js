const express = require('express');
const router = express.Router();

const pcheduling = require('../../models/Pschedule');

router.get('/', (req, res) => {
    pcheduling.find()
        .then(schedule => res.json(schedule));
});

router.post('/', (req, res) => {
    const { title, startDate, endDate } = req.body

    const newSchedule = new pcheduling({
        title,
        startDate,
        endDate
    });

    newSchedule.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    pcheduling.findById(req.params.id)
        .then(schedule => schedule.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;