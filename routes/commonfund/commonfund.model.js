import mongoose from 'mongoose';

const CommonfundSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  detail: {
    type: String
  },
  expirationDays: {
    type: Number
  }
});

export const CommonfundModel = mongoose.model('Commonfund', CommonfundSchema);