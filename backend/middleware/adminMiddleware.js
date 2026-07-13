const admin = (req, res, next) => {

    if (req.user && req.user.isAdmin) {

        next();

    } else {

        res.status(403).json({
            message: "Niste ovlašćeni za ovu akciju"
        });

    }

};


module.exports = admin;