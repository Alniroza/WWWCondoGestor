import mongoose from 'mongoose';
import { HouseModel } from './house.model.js'

const Query = {
  async findOneHouse(_, args){
    let { _id } = args;
    const result = await HouseModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllHouse(){
    const result = await HouseModel.find({});
    return result
  }
}

const Mutation = {
  async addHouse(_, args){
    let { input } = args;
    const result = await HouseModel.create(input);
    console.log(result);
    return result;
  },
  async updateHouse(_, args){
    let { _id, input } = args;
    const result = await HouseModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteHouse(_, args){
    let { _id } = args;
    const result = await HouseModel.findByIdAndRemove(moongose.Types.ObjectId(_id));
    return result;
  }
}

export const HouseResolver = {
  Query: Query,
  Mutation: Mutation
}