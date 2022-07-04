import mongoose from 'mongoose';

const mongoUrl = 'mongodb://localhost:27017/wwwcondo'
export const mongoConnection = mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
