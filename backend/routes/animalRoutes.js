const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");


// 🟢 CREATE - dodaj životinju
router.post("/", async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 🟢 READ - sve životinje
router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 🟢 READ - jedna životinja
router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    res.json(animal);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 🟡 UPDATE - izmena
router.put("/:id", async (req, res) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedAnimal);
  } catch (err) {
    res.status(500).json(err);
  }
});


// 🔴 DELETE - brisanje
router.delete("/:id", async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json("Animal deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;