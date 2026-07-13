const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const Animal = require("../models/Animal");

const {
    createAnimal,
    getAnimals,
    getAnimalById
} = require("../controllers/animalController");


// Dodavanje životinje
router.post(
    "/",
    upload.single("image"),
    createAnimal
);


// Prikaz svih životinja
router.get("/", getAnimals);


// Prikaz jedne životinje
router.get("/:id", getAnimalById);


// Izmena životinje
router.put(
    "/:id",
    upload.single("image"),
    async (req, res) => {
        console.log("FAJL:", req.file);
        console.log("BODY:", req.body);

    try {

        const animal = await Animal.findById(req.params.id);

        if (!animal) {

            return res.status(404).json({
                message: "Životinja nije pronađena."
            });

        }


        animal.name = req.body.name;
        animal.type = req.body.type;
        animal.age = req.body.age;
        animal.description = req.body.description;
        animal.status = req.body.status;
        if(req.file){

    animal.image = `/uploads/${req.file.filename}`;

}


        const updatedAnimal = await animal.save();


        res.json(updatedAnimal);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Brisanje životinje
router.delete("/:id", async (req, res) => {

    try {

        const animal = await Animal.findById(req.params.id);


        if (!animal) {

            return res.status(404).json({
                message: "Životinja nije pronađena."
            });

        }


        await animal.deleteOne();


        res.json({
            message: "Životinja uspešno obrisana."
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;