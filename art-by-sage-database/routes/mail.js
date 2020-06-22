const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors')
const router = express.Router();
const mailItem = require("../models/mailItem");

router.get("/", (req, res) => {
    res.send("Hello");
});

module.exports = router;
