const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connnect(process.env.MONGO_URL);
    console.log(`Mongoose is running , ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
