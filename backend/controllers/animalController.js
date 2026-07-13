const Animal = require("../models/Animal");


// CREATE - dodavanje životinje
const createAnimal = async (req, res) => {

    try {

        const animal = await Animal.create({

            name: req.body.name,

            type: req.body.type,

            age: req.body.age,

            description: req.body.description,

            status: req.body.status,

            image: req.file
                ? `/uploads/${req.file.filename}`
                : ""

        });


        res.status(201).json(animal);


    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }

};


// READ - sve životinje
const getAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();

        res.json(animals);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// READ - jedna životinja
const getAnimalById = async (req, res) => {
    try {

        const animal = await Animal.findById(req.params.id);

        if (!animal) {
            return res.status(404).json({
                message: "Životinja nije pronađena"
            });
        }

        res.json(animal);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE
const updateAnimal = async (req, res) => {
    try {

        const animal = await Animal.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.json(animal);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE
const deleteAnimal = async (req, res) => {
    try {

        await Animal.findByIdAndDelete(req.params.id);

        res.json({
            message: "Životinja obrisana"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createAnimal,
    getAnimals,
    getAnimalById,
    updateAnimal,
    deleteAnimal
};