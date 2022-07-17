import mongoose from 'mongoose';
import { ReserveModel } from './Reserve.model.js'

const Query = {
  async findOneReserve(_, args){
    let { _id } = args;
    const result = await ReserveModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllReserveByHouse(_, args){
    let { houseId } = args 
    if (!houseId) return []
    const result = await ReserveModel.find({ houseId: houseId });
    return result;
  },
  async findAllReserve(){
    const result = await ReserveModel.find({});
    return result
  },
  async findAllReservesByResident(_,args){
    let { residentId } = args
    const result = await ReserveModel.find({ residentId: residentId });
    return result
  },/*
  async findAllReservesByCommonfield(_, args){
    let { commonfieldId } = args;
    const result = await PeriodModel 
  }*/
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