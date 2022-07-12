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
  },
  { 
    versionKey: false 
  }
);

export const ResidentModel = mongoose.model('Resident', ResidentSchema);