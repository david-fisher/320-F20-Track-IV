const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // set: (pw) => bcrypt.hashSync(pw, 12), // TODO: 12 MUST BE ENCRYPTED
  },
  userType: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    enum: ['student', 'instructor'],
  },
}).index({ email: 1 });

userSchema.methods.comparePassword = function (password, cb) {
  // if (bcrypt.compareSync(password, this.password)) {
  if (password === this.password) {
    cb(null, true);
  } else {
    cb('Error: password unmatched');
  }
};

module.exports = mongoose.model('users', userSchema);
