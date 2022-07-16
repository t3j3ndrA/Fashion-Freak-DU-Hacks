const express = require("express");
const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());

// Server Listening...
const msg = `Service is running on port 5001`;
app.listen(process.env.PORT || 5001, () => console.log(msg));
