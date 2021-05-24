const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    // connecting to mongo database
    mongoose.connect('process.env.MONGO_CONNECTION_URI', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully connected to database.');
        }
    });
}
