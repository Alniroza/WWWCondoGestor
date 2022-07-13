import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
  condominiumId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  residentsId: [{
    type: mongoose.Types.ObjectId,
    required: false
  }],
  name: {
    type: String,
    required: true
  }
});

export const HouseModel = mongoose.models.House || mongoose.model('House', HouseSchema);