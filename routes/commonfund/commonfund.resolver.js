import mongoose from 'mongoose';
import { CommonfundModel } from './Commonfund.model.js'

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
  }
}

export const CommonfundResolver = {
  Query: Query,
  Mutation: Mutation
}