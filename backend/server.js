const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
const animalRoutes = require("./routes/animalRoutes");

app.use("/api/users", userRoutes);
app.use("/api/animals", animalRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// MongoDB + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));