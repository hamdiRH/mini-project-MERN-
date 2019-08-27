const express = require('express');
const router = express.Router();



const Student = require('../../models/Students')


router.get('/', (req, res) => {
    Student.find()

        .then(user => res.json(user));
});

router.put('/:id', (req, res) => {

    const { name, email, birthday, gender, adresse, tel, guardienName, guardienEmail, guardienTel, classSection } = req.body
    Student.findOneAndUpdate(req.params.id, { $set: { name: name, email: email, tel: tel, birthday: birthday, gender: gender, adresse: adresse, classSection: classSection, guardienName: guardienName, guardienTel: guardienTel, guardienEmail: guardienEmail } })
        .then(Student => Student.put().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})
module.exports = router;
