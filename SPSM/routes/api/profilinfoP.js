const express = require('express');
const router = express.Router();



const Prof = require('../../models/Prof')


router.get('/', (req, res) => {
    Prof.find()
        .then(user => res.json(user));
});


router.put('/:id', (req, res) => {

    const { tel,
        password,
        email,
        name,
        birthday,
        clas,
        adresse} = req.body
    Prof.findOneAndUpdate(req.params.id, { $set: { name: name, email: email, tel: tel, birthday: birthday, adresse:adresse,class:clas } })
        .then(prof => prof.put().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})


module.exports = router;