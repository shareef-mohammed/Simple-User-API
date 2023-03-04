const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
    },

    dob: {
      type: String,
    },

    State: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    city: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);