const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/user");


const createAdmin = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);


        const password = await bcrypt.hash(
            "Admin123!",
            10
        );


        const admin = await User.create({

            name: "Admin",

            email: "admin@azil.com",

            password,

            isAdmin: true

        });


        console.log("Admin napravljen:", admin);


        process.exit();


    } catch(error) {

        console.log(error);

        process.exit(1);

    }

};


createAdmin();