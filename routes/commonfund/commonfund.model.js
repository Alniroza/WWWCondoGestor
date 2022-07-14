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
  expirationCycle: {
    type: String
  },

});

export const CommonfundModel = mongoose.models.Commonfund || mongoose.model('Commonfund', CommonfundSchema);