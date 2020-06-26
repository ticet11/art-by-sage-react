const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/user");

const signToken = (userID) => {
    return JWT.sign(
        {
            iss: "sagekozub.com",
            sub: userID,
        },
        "VeryCoolSecret",
        { expiresIn: "604800" }
    );
};

// Creating One
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Registration Error",
                    msgError: true,
                },
            });
        if (user)
            res.status(400).json({
                message: {
                    msgBody: "Username already in use.",
                    msgError: true,
                },
            });
        else {
            const newUser = new User({ username, password });
            newUser.save((err) => {
                if (err)
                    res.status(500).json({
                        message: {
                            msgBody: "Registration Error",
                            msgError: true,
                        },
                    });
                else
                    res.status(201).json({
                        message: {
                            msgBody: "Account successfully created.",
                            msgError: false,
                        },
                    });
            });
        }
    });
});

// Login
router.post(
    "/login",
    passport.authenticate("local", { session: false }),
    (req, res) => {
        if (req.isAuthenticated()) {
            const { _id, username } = req.user;
            const token = signToken(_id);
            res.cookie("access_token", token, {
                httpOnly: true,
                sameSite: true,
            });
            res.status(200).json({
                isAuthenticated: true,
                user: { username },
            });
        }
    }
);

// Logout
router.get("/logout", (req, res) => {
    req.logout();
    res.clearCookie("access_token");
    res.json({ user: { username: "" }, success: true });
});

// Getting All
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Authenticate
router.get(
    "/authenticated",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { username } = req.user;
        res.status(200).json({
            isAuthenticated: true,
            user: { username },
        });
    }
);

// Getting One
router.get("/:id", getUser, (req, res) => {
    res.send(res.user);
});

// Updating One
router.patch("/:id", getUser, async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Deleting One
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: "Deleted user" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res
                .status(404)
                .json({ message: "cannot find user" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.user = user;
    next();
}

module.exports = router;
