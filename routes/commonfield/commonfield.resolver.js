import mongoose from 'mongoose';
import { CommonFieldModel } from './commonfield.model.js'

const Query = {
  async findOneCommonField(_, args){
    let { _id } = args;
    const result = await CommonFieldModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllCommonField(){
    const result = await CommonFieldModel.find({});
    return result
  }
}

const Mutation = {
  async addCommonField(_, args){
    let { input } = args;
    const result = await CommonFieldModel.create(input);
    console.log(result);
    return result;
  },
  async updateCommonField(_, args){
    let { _id, input } = args;
    const result = await CommonFieldModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteCommonField(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await CommonFieldModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
}

export const CommonFieldResolver = {
  Query: Query,
  Mutation: Mutation
}