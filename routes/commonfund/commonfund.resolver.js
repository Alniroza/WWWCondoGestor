import mongoose from 'mongoose';
import { CommonFundModel } from './commonfund.model.js'

const Query = {
  async findOneCommonFund(_, args){
    let { _id } = args;
    const result = await CommonFundModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllCommonFund(){
    const result = await CommonFundModel.find({});
    return result
  }
}

const Mutation = {
  async addCommonFund(_, args){
    let { input } = args;
    const result = await CommonFundModel.create(input);
    console.log(result);
    return result;
  },
  async updateCommonFund(_, args){
    let { _id, input } = args;
    const result = await CommonFundModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteCommonFund(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await CommonFundModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
}

export const CommonFundResolver = {
  Query: Query,
  Mutation: Mutation
}