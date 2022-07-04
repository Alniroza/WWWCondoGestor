import mongoose from 'mongoose';
import { CondominiumModel } from './condominium.model.js'

const Query = {
  async findOneCondominium(_, args){
    let { _id } = args;
    const result = await CondominiumModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllCondominium(){
    const result = await CondominiumModel.find({});
    return result
  }
}

const Mutation = {
  async addCondominium(_, args){
    let { input } = args;
    const result = await CondominiumModel.create(input);
    console.log(result);
    return result;
  },
  async updateCondominium(_, args){
    let { _id, input } = args;
    const result = await CondominiumModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteCondominium(_, args){
    let { _id } = args;
    const result = await CondominiumModel.findByIdAndRemove(moongose.Types.ObjectId(_id));
    return result;
  }
}

export const CondominiumResolver = {
  Query: Query,
  Mutation: Mutation
}