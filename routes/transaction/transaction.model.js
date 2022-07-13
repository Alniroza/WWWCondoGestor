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
  amount: {
    type: Number,
    required: true
  },
  payedAmount: {
    type: Number,
    required: true
  },
  detail: {
    type: String
  },
  expirationDate: {
    type: Date
  }
},
{
  timestamps: true
}
);

export const TransactionModel = mongoose.model('Transaction', TransactionSchema);