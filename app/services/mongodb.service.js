const mongoose = require('mongoose');

exports.connect = () => {
    // connecting to mongo database
    mongoose.connect('mongodb://localhost:27017/placementiiitl', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully connected to database.');
        }
    });
}
