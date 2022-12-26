const mongoose = require("mongoose");
const db =
  "mongodb+srv://project1:project1@cluster0.tlxjylv.mongodb.net/?retryWrites=true&w=majority";

const connectToDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
      
    });
   
    console.log("Connected online to mongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
mongoose.set('strictQuery', true);
module.exports = connectToDb;