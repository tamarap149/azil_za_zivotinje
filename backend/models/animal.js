const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["available", "adopted"],
    default: "available"
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("Animal", animalSchema);