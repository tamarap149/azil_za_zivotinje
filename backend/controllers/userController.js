const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


// REGISTER
const registerUser = async (req, res) => {

    const { name, email, password } = req.body;


    // Provera unosa
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Sva polja su obavezna"
        });
    }


    // Provera jačine lozinke
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message:
            "Lozinka mora imati najmanje 8 karaktera, jedno veliko slovo, broj i specijalni znak"
        });
    }


    // Provera da li korisnik postoji
    const userExists = await User.findOne({ email });


    if (userExists) {
        return res.status(400).json({
            message: "Korisnik već postoji"
        });
    }


    // Šifrovanje lozinke
    const salt = await bcrypt.genSalt(10);

    const hashedPassword =
        await bcrypt.hash(password, salt);


    // Kreiranje korisnika
    const user = await User.create({

        name,
        email,
        password: hashedPassword

    });


    if (user) {

        const token = generateToken(user._id);


        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token

        });

    }

};


// LOGIN
const loginUser = async (req, res) => {

     console.log(req.body);
     
    const { email, password } = req.body;


    const user = await User.findOne({ email });


    if (user && await bcrypt.compare(password, user.password)) {


        const token = generateToken(user._id);


        res.json({

            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token

        });


    } else {

        res.status(401).json({

            message: "Pogrešan email ili lozinka"

        });

    }

};
const getUserProfile = async (req, res) => {

    const user = await User.findById(req.user._id);

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }
    else{
        res.status(404).json({
            message:"User not found"
        });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};