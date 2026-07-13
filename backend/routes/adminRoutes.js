const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");


router.get("/", protect, admin, (req, res) => {

    res.json({
        message: "Dobrodošao u admin panel 🐾"
    });

});


module.exports = router;