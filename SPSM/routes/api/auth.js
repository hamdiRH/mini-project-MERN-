const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


// User Model

const Student = require('../../models/Students')
const Prof = require('../../models/Prof')

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const { email, password, user } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' + user });
  }
  if (user === 1) {
    Student.findOne({ email })
      .then(user => {
        if (!user) return res.status(400).json({ msg: 'User Does not exist' });

        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 60 * 60 * 24 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    user: 'student',
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    birthday: user.birthday,
                    tel: user.tel,
                    gender: user.gender,
                    adresse: user.adresse,
                    classSection: user.classSection,
                    guardienName: user.guardienName,
                    guardienTel: user.guardienTel,
                    guardienEmail: user.guardienEmail
                  }
                });
              }
            )
          })
      })
  }
  if (user === 2) {

    Prof.findOne({ email })
      .then(user => {
        if (!user) return res.status(400).json({ msg: 'User Does not exist' });

        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    user: 'prof',
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    tel: user.tel,
                    birthday: user.birthday,
                    class: user.class,
                    adresse:user.adresse
                  }
                });
              }
            )
          })
      })
  }
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {


  Student.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;
