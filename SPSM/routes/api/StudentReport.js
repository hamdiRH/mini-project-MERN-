const express = require('express');
const router = express.Router();


const Report = require('../../models/ReportS');



router.get('/', (req, res) => {
    Report.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});


router.post('/', (req, res) => {
    const { user, email, Phone, subject, ReportS } = req.body
    const newReport = new Report({
        user, email, Phone, subject, ReportS
    });

    newReport.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Report.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;