import mongoose from 'mongoose';

const CommonFundSchema = new mongoose.Schema({
  house_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  payed_amout: {
    type: Number,
    required: true
  },
  detail: {
    type: String
  },
  expiration_timestamp: {
    type: Date
  },
  period_fee: {
    type: String,
    required: true
  }
});

export const CommonFundModel = mongoose.model('CommonFund', CommonFundSchema);