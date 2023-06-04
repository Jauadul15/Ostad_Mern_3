const { readdirSync } = require("fs");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const mongoose = require("mongoose");
const {json} = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
const URI = process.env.DATABASE;

// Security middleware implementations
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());
app.use(express.json());

// Rate limiter middleware
const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 1000,
});
app.use(limiter);

// Routing implementation
readdirSync("./routes").map((r) =>
    app.use("/api/v1", require(`./routes/${r}`))
);

// Undefined routes handler
app.use("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        data: "Not Found",
    });
});

// Connect to the MongoDB database
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
    });
