import mongoose from 'mongoose';
import { CommonfieldModel } from './Commonfield.model.js'

const Query = {
  async findOneCommonfield(_, args){
    let { _id } = args;
    const result = await CommonfieldModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllCommonfield(){
    const result = await CommonfieldModel.find({});
    return result
  },
  async findAllCommonfieldByCondominiumId(_, args){
    let { condominiumId } = args;
    const result = await CommonfieldModel.find({condominiumId: condominiumId});
    return result
  }
}

const Mutation = {
  async addCommonfield(_, args){
    let { input } = args;
    const result = await CommonfieldModel.create(input);
    console.log(result);
    return result;
  },
  async updateCommonfield(_, args){
    let { _id, input } = args;
    const result = await CommonfieldModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteCommonfield(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await CommonfieldModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
}

export const CommonfieldResolver = {
  Query: Query,
  Mutation: Mutation
}