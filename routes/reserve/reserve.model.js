import mongoose from "mongoose";

const ReserveSchema = new mongoose.Schema(
  {
    houseId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    periodId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    transactionId: {
      type: mongoose.Types.ObjectId,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const ReserveModel = mongoose.models.Reserve || mongoose.model("Reserve", ReserveSchema);