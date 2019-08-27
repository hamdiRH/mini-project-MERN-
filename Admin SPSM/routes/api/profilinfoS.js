const express = require('express');
const router = express.Router();



const Student = require('../../models/Students')


router.get('/', (req, res) => {
    Student.find()
        .sort({ email: 1 })

        .then(user => res.json(user));
});


router.delete('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

router.put('/:id', (req, res) => {

    const { name, email, age, gender, adresse, guardienname, guardienemail, guardientel, classe } = req.body
    Student.findOneAndUpdate(req.params.id, { $set: { name: name, email: email, birthday: age, gender: gender, adresse: adresse, classSection: classe, guardienName: guardienname, guardienTel: guardientel, guardienEmail: guardienemail } })
        .then(item => item.put().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})



module.exports = router;
