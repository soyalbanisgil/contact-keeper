// este archivo permite registrar los usuarios

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

// @route           POST   api/users
// @desc            Register a user
// @access          Public
router.post(
  '/',
  body('name', 'Please add name').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 7 }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // if there is a user whit that email
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // create a new user
      user = new User({
        name,
        email,
        password,
      });

      // encrypt the password
      const salt = await bcrypt.genSalt(10);
      // hash version of the password
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // create payload
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) {
            if (err) throw err;
            res.json({ token });
          }
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
