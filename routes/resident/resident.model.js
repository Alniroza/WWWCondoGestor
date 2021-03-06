import { mongoose } from 'mongoose';

const ResidentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String
    }
  },
  { 
    versionKey: false 
  }
);

export const ResidentModel = mongoose.models.Resident || mongoose.model('Resident', ResidentSchema);