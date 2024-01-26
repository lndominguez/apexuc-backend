// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false,
    unique: true
  },
  profilePicture:{
    type: String,
    required: false
  }

  // Otros campos según sea necesario
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
