import mongoose from 'mongoose';

const CommonFundSchema = new mongoose.Schema({
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

export const CommonFundModel = mongoose.model('CommonFund', CommonFundSchema);