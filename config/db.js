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

// db.products.insertMany([
//     {
//         name: "Product 1",
//         desc: "Description for Product 1",
//         price: 100,
//         imageUrl: "/images/1.PNG"},
//     {
//       name: "Product 2",
//       desc: "Description for Product 2",
//       price: 150,
//       imageUrl: "/images/2.PNG"
//     },
//     { name: "Product 3",
//       desc: "Description for Product 3",
//       price: 120,
//       imageUrl: "/images/3.PNG"
//     },
//     {
//       name: "Product 4",
//       desc: "Description for Product 4",
//       price: 200,
//       imageUrl: "/images/4.PNG"
//     },
//     {
//       name: "Product 5",
//       desc: "Description for Product 5",
//       price: 180,
//       imageUrl: "/images/5.PNG"
//     },
//     {
//       name: "Product 6", 
//       desc: "Description for Product 6",
//       price: 220,
//       imageUrl: "/images/6.PNG"
//     },
//     {
//       name: "Product 7",
//       desc: "Description for Product 7",
//       price: 250,
//       imageUrl: "/images/7.PNG"
//     },
//     {
//       name: "Product 8",
//       desc: "Description for Product 8",
//       price: 300,
//       imageUrl: "/images/8.PNG"
//     }
//   ]);