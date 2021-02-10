const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Sorry Email cannot be blank'],
    unique: [true, 'Email account already exists'],
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Sorry Enter a password'],
    maxlength: [12, 'password cannot exceed 12 characters'],
    minlength: [8, 'Password must have at least 8 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Sorry Enter a passwordCnfirm'],
    maxlength: [12, 'password cannot exceed 12 characters'],
    minlength: [8, 'Password must have at least 8 characters'],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Sorry the passwordConfirm must match the password ',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordTokenExpiresAt: Date,
});
