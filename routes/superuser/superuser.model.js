import mongoose from 'mongoose';

const SuperUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const SuperUserModel = mongoose.models.SuperUser || mongoose.model('SuperUser', SuperUserSchema);