const express = require("express");
const router = express.Router();

const {
    createRequest,
    getMyRequests,
} = require("../controllers/adoptionRequestController");

const { protect } = require("../middleware/authMiddleware");

const AdoptionRequest = require("../models/AdoptionRequest");


// ==========================
// Korisnik
// ==========================

// Slanje zahteva
router.post("/", protect, createRequest);

// Moji zahtevi
router.get("/my", protect, getMyRequests);


// ==========================
// Admin
// ==========================

// Svi zahtevi
router.get("/", async (req, res) => {

    try {

        const requests = await AdoptionRequest.find()
            .populate("user")
            .populate("animal");

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Promena statusa
router.put("/:id", async (req, res) => {

    try {

        const request = await AdoptionRequest.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            {
                new: true,
            }
        );

        res.json(request);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

});

module.exports = router;