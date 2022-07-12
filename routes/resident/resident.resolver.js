import mongoose from 'mongoose';
import { ResidentModel } from './resident.model.js'

const Query = {
  async findOneResident(_, args){
    let { _id } = args;
    const result = await ResidentModel.findOne({_id: mongoose.Types.ObjectId(_id)});
    console.log(result);
    return result;
  },
  async findAllResident(){
    const result = await ResidentModel.find({});
    return result
  },
  async authResident(_, args){
    let { username, password } = args;
    const result = await ResidentModel.findOne({ username: username });
    if (result["password"] === password ){
      return true;
    }
    return false;
  },
  async findResidentByUsername(_, args){
    let { username } = args;
    const result = await ResidentModel.findOne({ username: username});
    return result;
  }
};

const Mutation = {
  async addResident(_, args){
    //TODO: Revisar si resident existe o no
    let { input } = args;
    const result = await ResidentModel.create(input);
    console.log(result);
    return result;
  },
  async updateResident(_, args){
    let { _id, input } = args;
    const result = await ResidentModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
    return result;
  },
  async deleteResident(_, args){
    let { _id } = args;
    console.log(_id)
    const result = await ResidentModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
    return result;
  }
};

export const ResidentResolver = {
  Query: Query,
  Mutation: Mutation
}