const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// const { User } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const router = express.Router();

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrewohejiedOgbu@gmail.com',
    pass: 'sxse hswf meju vqqk',
  },
});

// Forgot password route
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: 'No user found with that email address.' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const expirationTime = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(expirationTime);

    await user.save();

    const mailOptions = {
      to: user.email,
      from: 'your-email@gmail.com',
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
            `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
            `http://localhost:3000/reset-password/${token}\n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.send({ message: 'An email has been sent to ' + user.email + ' with further instructions.' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email.' });
  }
});

// Reset password route
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    });

    if (!user) {
      return res.status(400).send({ message: 'Password reset token is invalid or has expired.' });
    }

    user.password = await bcrypt.hash(password, 10); // Hash the password before saving
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    res.send({ message: 'Password has been reset.' });
  } catch (error) {
    res.status(500).send({ message: 'Error resetting password.' });
  }
});

module.exports = router;
