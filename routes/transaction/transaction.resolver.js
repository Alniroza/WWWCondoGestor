import mongoose from 'mongoose';
import { TransactionModel } from './transaction.model.js'

const Query = {
  async findOneTransaction(_, args){
    let { _id } = args;
    const result = await TransactionModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result.lean();
  },
  async findAllTransaction(){
    const result = await TransactionModel.find({});
    return result.lean()
  }
}

const Mutation = {
  async addTransaction(_, args){
    let { input } = args;
    const result = await TransactionModel.create(input);
    console.log(result);
    return result.lean();
  },
  async updateTransaction(_, args){
    let { _id, input } = args;
    const result = await TransactionModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result.lean();
  },
  async deleteTransaction(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await TransactionModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result.lean();
  },
  async payTransaction(_, args){
    let { transactionId, payedAmount } = args
    let transaction = TransactionModel.findOne({_id: mongoose.Types.ObjectId(transactionId)})
    if (transaction.amount > transaction.payedAmount + payedAmount){
      transaction.amount += payedAmount;
      transaction.save();
      return transaction;
    } else {
      return transaction;
    }
  },
}

export const TransactionResolver = {
  Query: Query,
  Mutation: Mutation
}