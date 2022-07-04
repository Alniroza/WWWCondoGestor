import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
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
  expirationDate: {
    type: Date
  }
});

export const TransactionModel = mongoose.model('Transaction', TransactionSchema);