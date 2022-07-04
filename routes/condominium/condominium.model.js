import mongoose from 'mongoose';

const CondominiumSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export const CondominiumModel = mongoose.model('Condominium', CondominiumSchema);