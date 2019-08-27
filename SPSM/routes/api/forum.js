const express = require('express');
const router = express.Router();


const Forum = require('../../models/Forum');


router.get('/', (req, res) => {
    Forum.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post('/', (req, res) => {
    const newPost = new Forum({
        name: req.body.name
    });

    newPost.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// router.put('/:id', (req, res) => {

//     const { user,ctn,date} = req.body
//     Forum.findOneAndUpdate(req.params.id, { $set: { name: name, email: email, tel: tel, birthday: birthday, adresse:adresse,class:clas } })
//         .then(prof => prof.put().then(() => res.json({ success: true })))
//         .catch(err => res.status(404).json({ success: false }));
// })

module.exports = router;
