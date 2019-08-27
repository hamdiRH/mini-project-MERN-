const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


// User Model
const Student = require('../../models/Students')
const Prof = require('../../models/Prof')

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {

  const { user, name, email, password, birthday, tel, gender, adresse, classSection, guardienName, guardienTel, guardienEmail, Padresse, Ptel, Ppassword, Pemail, Pname, PclassSection, Pbirthday } = req.body;


  // Simple validation
  if (user === 'S' && (!name || !email || !password || !birthday || !gender || !adresse || !classSection || !guardienName || !guardienTel || !guardienEmail))
    return res.status(400).json({ msg: 'Please enter all fields' });
  if (user === 'P' && (!Padresse || !Ptel || !Ppassword || !Pemail || !Pname))
    return res.status(400).json({ msg: 'Please enter all fields' });

  if (user === 'S') {
    // Check for existing Student
    Student.findOne({ email })
      .then(student => {
        if (student) return res.status(400).json({ msg: 'User already exists' });

        const newStudent = new Student({
          user: 'student',
          name,
          email,
          password,
          birthday,
          gender,
          adresse,
          tel,
          classSection,
          guardienName,
          guardienTel,
          guardienEmail
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent.save()
              .then(student => {
                jwt.sign(
                  { id: student.id },
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      student: {
                        id: student.id,
                        user: 'student',
                        name: student.name,
                        email: student.email,
                        birthday: student.birthday,
                        gender: student.gender,
                        tel: student.tel,
                        adresse: student.adresse,
                        classSection: student.classSection,
                        guardienName: student.guardienName,
                        guardienTel: student.guardienTel,
                        guardienEmail: student.guardienEmail
                      }
                    });
                  }
                )
              });
          })
        })
      })
  }

  else if (user === 'P') {
    // Check for existing Student
    Prof.findOne({ email })
      .then(prof => {
        if (prof) return res.status(400).json({ msg: 'User already exists' });

        const newProf = new Prof({
          user: 'prof',
          adresse: Padresse,
          tel: Ptel,
          password: Ppassword,
          email: Pemail,
          name: Pname,
          tel: Ptel,
          birthday: Pbirthday,
          class: PclassSection
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newProf.password, salt, (err, hash) => {
            if (err) throw err;
            newProf.password = hash;
            newProf.save()
              .then(prof => {
                jwt.sign(
                  { id: prof.id },
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      prof: {
                        user: 'prof',
                        id: prof.id,
                        name: prof.name,
                        email: prof.email,
                        adresse: prof.adresse,
                        tel: prof.tel,
                        birthday: prof.birthday,
                        class: prof.class
                      }
                    });
                  }
                )
              });
          })
        })
      })
  }
  else { return res.status(400).json({ msg: 'Error verify your form' }); }
});

module.exports = router;
