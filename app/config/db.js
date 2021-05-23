require('dotenv').config();
const mongoose = require('mongoose');


const db = process.env.MONGO_CONNECTION_URI;

const connectDB = async() =>{
	try{
		await mongoose.connect(db,{
			useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:true
		});
		console.log("DB connected");

	}catch (err){
		console.error(err.message);
		process.exit(1);
	}
}

module.exports = connectDB;