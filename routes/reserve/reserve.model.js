import mongoose from 'mongoose';

const ReserveSchema = new mongoose.Schema({
  house_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  commonfield_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  transaction_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  detail: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  period: {
    type: Number,
    required: true,
  }


});

export const ReserveModel = mongoose.model('Reserve', ReserveSchema);