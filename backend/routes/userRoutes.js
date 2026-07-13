const express = require("express");
const User = require("../models/user");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getUserProfile
} = require("../controllers/userController");



router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, getUserProfile);

// Svi korisnici - admin
router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        console.log(users);

        res.json(users);

    } catch(error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});



module.exports = router;