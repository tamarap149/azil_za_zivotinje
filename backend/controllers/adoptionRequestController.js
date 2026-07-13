const AdoptionRequest = require("../models/AdoptionRequest");


// Kreiranje zahteva za udomljavanje
const createRequest = async (req, res) => {

    try {

        const { animal, message } = req.body;

        const request = await AdoptionRequest.create({

            user: req.user._id,
            animal,
            message

        });

        res.status(201).json(request);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Korisnik vidi svoje zahteve
const getMyRequests = async (req, res) => {

    try {

        const requests = await AdoptionRequest.find({

            user: req.user._id

        }).populate("animal");

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {

    createRequest,
    getMyRequests

};