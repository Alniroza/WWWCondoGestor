import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "House"
  },
  reason: {
    type: String,
    required: true
  },
  detail: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  payedAmount: {
    type: Number,
    required: true
  },
  expirationFeePorcent: {
    type: Number
  },
  expirationCycle: {
    type: String
  }
},
{
  timestamps: true
}
);

export const TransactionModel = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);