import mongoose from 'mongoose';
import { PeriodModel } from './period.model.js'
import { ReserveModel } from './reserve.model.js'

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
}

const Mutation = {
  async addPeriod(_, args){
    let { input } = args;
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
    let { periodId, transactionId, houseId } = args;
    console.log(periodId, transactionId);
    const result = await ReserveModel.create({
      periodId: periodId,
      transactionId: transactionId,
      houseId: houseId
    });
    return result;
  }
}

export const PeriodResolver = {
  Query: Query,
  Mutation: Mutation
}