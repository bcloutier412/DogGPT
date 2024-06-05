const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

// Utils
const config = require("./utils/config.js");
const logger = require("./utils/logger.js");
const { requestLogger, errorHandler } = require("./utils/middleware")

// Routes

mongoose.set("strictQuery", false);

// Connecting to database
mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to MongoDB");
    })
    .catch((error) => {
        logger.error("error connection to MongoDB:", error.message);
    });

app.use(cors());

app.use(express.json());
app.use(requestLogger);
app.use(express.static(path.join(__dirname, 'build')));

// LOGIN SESSION STUFF


// USE ROUTES


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(errorHandler)
module.exports = app;