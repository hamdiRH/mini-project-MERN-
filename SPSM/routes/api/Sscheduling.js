const express = require('express');
const router = express.Router();

const scheduling = require('../../models/Sschedule');

router.get('/', (req, res) => {
    scheduling.find()
        .then(schedule => res.json(schedule));
});

router.post('/', (req, res) => {
    const { title, startDate, endDate } = req.body

    const newSchedule = new scheduling({
        title,
        startDate,
        endDate
    });

    newSchedule.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    scheduling.findById(req.params.id)
        .then(schedule => schedule.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;