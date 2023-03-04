const mongoose = require("mongoose");
const config = async () => {
  mongoose
    .connect(process.env.MONG_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("CONNECTION ERROR");
      console.log(err);
    });
};
module.exports = config;