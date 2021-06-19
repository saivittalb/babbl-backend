const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`Database connection established with ${connection.connections[0].name}!`);
  } catch (err) {
    console.error("Error connecting to database instance due to: ", err);
  }
};

module.exports = connectToDb;
