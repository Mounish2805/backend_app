import mongoose from "mongoose";

const dbConnect  = async () => {
    try{
      await  mongoose.connect(process.env.MONGO_URI);
    }catch(err){
    console.log(err);
    }
    };


export default dbConnect;

//process.env.MONGO_URI is used to access the MongoDB connection string stored in the environment variables. 
// This allows you to keep sensitive information like database credentials out of your source code and easily manage different 
// configurations for development, testing, and production environments.