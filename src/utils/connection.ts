import mongoose from 'mongoose';

mongoose.connect(
    'mongodb+srv://paulo-ricardo:gabal123@cluster0.qb6ga.mongodb.net/test?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

