const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/user");

// Getting All
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Getting One
router.get("/:id", getUser, (req, res) => {
    res.send(res.user);
});

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
