import mongoose from 'mongoose';
import { TransactionModel } from './transaction.model.js'

const Query = {
  async findOneTransaction(_, args){
    let { _id } = args;
    const result = await TransactionModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllTransaction(){
    const result = await TransactionModel.find({});
    return result
  }
}

const Mutation = {
  async addTransaction(_, args){
    let { input } = args;
    const result = await TransactionModel.create(input);
    console.log(result);
    return result;
  },
  async updateTransaction(_, args){
    let { _id, input } = args;
    const result = await TransactionModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteTransaction(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await TransactionModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
}

export const TransactionResolver = {
  Query: Query,
  Mutation: Mutation
}