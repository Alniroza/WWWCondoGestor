import mongoose from 'mongoose';
import { ReserveModel } from './Reserve.model.js'

const Query = {
  async findOneReserve(_, args){
    let { _id } = args;
    const result = await ReserveModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllReserve(){
    const result = await ReserveModel.find({});
    return result
  }
}

const Mutation = {
  async addReserve(_, args){
    let { input } = args;
    const result = await ReserveModel.create(input);
    console.log(result);
    return result;
  },
  async updateReserve(_, args){
    let { _id, input } = args;
    const result = await ReserveModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteReserve(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await ReserveModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
}

export const ReserveResolver = {
  Query: Query,
  Mutation: Mutation
}