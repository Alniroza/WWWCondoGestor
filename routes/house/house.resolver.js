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
  },
  async findAllHousesByResident(_, args){
    let { residentId } = args;
    const result = await HouseModel.find({ residentsId: residentId })
    return result;
  },
  async findAllHousesByCondominium(_, args){
    let { condominiumId } = args;
    const result = await HouseModel.find({ condominiumId: condominiumId});
    return result;
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
  },
  async addResidentToHouse(_, args){
    let {houseId, residentId} = args;
    const result = await HouseModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(houseId)}, { $push: {residentsId: residentId}});
    return result;
  }
}

export const HouseResolver = {
  Query: Query,
  Mutation: Mutation
}