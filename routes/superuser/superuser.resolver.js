import mongoose from 'mongoose';
import { SuperUserModel } from './superuser.model.js'

export const SuperUserResolver = {
  Query: {
    async findOneSuperUser(_, args){
      let { _id } = args;
      const result = await SuperUserModel.findOne({_id: mongoose.Types.ObjectId(_id)});
      console.log(result);
      return result;
    },
    async findAllSuperUser(){
      const result = await SuperUserModel.find({});
      return result
    },
    async authSuperUser(_, args){
      let { username, password } = args;
      const result = await SuperUserModel.findOne({ username: username });
      if (result && result["password"] === password ){
        return true;
      }
      return false;
    },
    async findSuperUserByUsername(_, args){
      let { username } = args;
      const result = await SuperUserModel.findOne({ username: username});
      return result;
    }
  },
  Mutation: {
    async addSuperUser(_, args){
      let { input } = args;
      const result = await SuperUserModel.create(input);
      console.log(result);
      return result;
    },
    async updateSuperUser(_, args){
      let { _id, input } = args;
      const result = await SuperUserModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, input);
      return result;
    },
    async deleteSuperUser(_, args){
      let { _id } = args;
      console.log(_id)
      const result = await SuperUserModel.findOneAndRemove({_id: mongoose.Types.ObjectId(_id)});
      return result;
    }
  }
}