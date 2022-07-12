import mongoose from 'mongoose';

const mongoUrl = `mongodb+srv://admin:admin@realmcluster.hn9gg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const mongoUrl = 'mongodb://localhost:27017/wwwcondo'

export const mongoConnection = mongoose.connect(
    mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
