import mongoose from 'mongoose';
import { PeriodModel } from './period.model.js';
import { ReserveModel } from '../reserve/reserve.model.js';
import { CommonfieldModel } from '../commonfield/commonfield.model.js';
import { TransactionModel } from '../transaction/transaction.model.js';

const periodConst = {
  hourly: "1",
  daily: "24",
  monthly: 30
}


const Query = {
  async findOnePeriod(_, args){
    let { _id } = args;
    const result = await PeriodModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllPeriod(){
    const result = await PeriodModel.find({});
    return result
  },
  async findAllPeriodByCommonfield(_, args){
    const { commonfieldId } = args;
    const result = await PeriodModel.find({commonfieldId: commonfieldId});
    return result
  },
  async findPeriodsById(_, args){
    const { periodsId } = args;
    if (!periodsId?.length) return [];
    const result = await PeriodModel.find({
      _id: { $in: periodsId}
    });
    return result;
  }
}

const Mutation = {
  async addPeriod(_, args){
    let { input } = args;
    const ocupied = await PeriodModel.findOne({
      commonfieldId: input.commonfieldId,
      startDate: {
        $gte: input.startDate,
        $lt: input.endDate,
      },
      endDate: {
        $gt: input.startDate,
        $lte: input.endDate,
      }
    });
    console.log(ocupied);
    if (ocupied){
      return null
    }
    const result = await PeriodModel.create(input);
    console.log(result);
    return result;
  },
  async updatePeriod(_, args){
    let { _id, input } = args;
    const result = await PeriodModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deletePeriod(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await PeriodModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  },
  async reservePeriod(_, args){
    let { periodId, houseId } = args;
    const period = await PeriodModel.findById(periodId);
    if (period && period.reserved){
      return null;
    }
    
    const commonfield = await CommonfieldModel.findById(period.commonfieldId);
    const newTransaction = {
      houseId: houseId,
      reason: "reserve",
      detail: `Reservacion de espacio comun ${commonfield.name}, periodo ${period.startDate}`,
      amount: commonfield.periodFee,
      payedAmount: commonfield.periodFee,
    }
    const transaction = await TransactionModel.create(newTransaction);
    period.reserved = true;
    period.save();
    const result = await ReserveModel.create({
      periodId: periodId,
      transactionId: transaction._id,
      houseId: houseId
    });

    return transaction;
  },
  /*
  async addConsecutivePeriods(_,args){
    let { commonfieldId, startDate, amount } = args;
    startDate = new Date(startDate);
    let endDate = new Date(startDate);

    let commonfield = await CommonfieldModel.findById(commonfieldId);
    

    for (let i = 0; i < amount; i++){
      let period = {
        commonfieldId: commonfieldId,
        startDate: startDate 
      }
      this.addPeriod()
    }
  }*/
}

export const PeriodResolver = {
  Query: Query,
  Mutation: Mutation
}