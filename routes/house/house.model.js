import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  condominium_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  residents_id: [{
    type: mongoose.Types.ObjectId,
    required: false
  }],
  name: {
    type: String,
    required: true
  }
});

export const HouseModel = mongoose.model('House', HouseSchema);