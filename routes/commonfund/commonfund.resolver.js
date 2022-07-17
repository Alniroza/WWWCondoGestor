import mongoose from 'mongoose';
import { CommonfundModel } from './Commonfund.model.js'
import { TransactionModel } from '../transaction/transaction.model.js'
import * as cron from 'node-cron'

const expirationFeePorcent = 0.05

console.log('Schedule bill commonfund every month on first day, at 0:00 ');
cron.schedule(
  '0 0 1 * * ', 
  async () => {
    console.log("Iniciando CRON")
    const commonfunds = await CommonfundModel.find({}).lean();
    commonfunds.forEach((commonfund) => {
      console.log(commonfund);
      let x = Mutation.billCommonfund('' ,{commonfundId: commonfund._id.toString()});
    });
  }
);


const Query = {
  async findOneCommonfund(_, args){
    let { _id } = args;
    const result = await CommonfundModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllCommonfund(){
    const result = await CommonfundModel.find({});
    return result
  },
  async findAllCommonfundByHouse(_, args){
    let { houseId } = args
    if (!houseId) return [] 
    const result = await CommonfundModel.find({ houseId: houseId });
    return result;
  }
}

const Mutation = {
  async addCommonfund(_, args){
    let { input } = args;
    const result = await CommonfundModel.create(input);
    console.log(result);
    return result;
  },
  async updateCommonfund(_, args){
    let { _id, input } = args;
    const result = await CommonfundModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteCommonfund(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await CommonfundModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  },
  async billCommonfund(_, args){
    let { commonfundId } = args;
    console.log(commonfundId)
    let commonfund = await CommonfundModel.findById(commonfundId);
    if (commonfund){
      let transaction = {
        houseId: commonfund.houseId,
        detail: `Cobro de Gasto comun de casa ${commonfund.houseId}.`,
        reason: "commonfund",
        amount: commonfund.amount,
        payedAmount: 0,
        expirationFeePorcent: expirationFeePorcent,
        expirationCycle: "monthly"
      }
      transaction = await TransactionModel.create(transaction);
      return transaction
    }
    return null;
  }
}

export const CommonfundResolver = {
  Query: Query,
  Mutation: Mutation
}
