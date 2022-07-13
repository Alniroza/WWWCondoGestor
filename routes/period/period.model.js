import mongoose from 'mongoose';

const PeriodSchema = new mongoose.Schema({
  commonfieldId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  reserved: {
    type: Boolean,
    required: true
  }
}

);

export const PeriodModel = mongoose.model('Period', PeriodSchema);