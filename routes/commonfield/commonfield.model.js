import mongoose from 'mongoose';

const CommonfieldSchema = new mongoose.Schema({
  condominiumId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  period: {
    type: String,
    required: true
  },
  periodFee: {
    type: Number,
    required: true
  },
  fineFee: {
    type: Number
  },
  finePeriod: {
    type: String,
  }
}

);

export const CommonfieldModel = mongoose.model('Commonfield', CommonfieldSchema);