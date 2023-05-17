const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  password: {type: String, required: true},
  username: {type: String, required: true},
  role: {
    type: String, 
    enum: ["Guerrier", "Alchimiste", "Sorcier", "Espions", "Enchanteur"],
    required: true
  },
  friends: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    default: [],
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User