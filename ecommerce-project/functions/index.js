/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51NQuxNEpy3FAb6mpf2a5ykkNHlpMYBUwcZGPNLT9teLdiqlrCkGgqAKBVFXxX5zFKUmFxhpMFgIXyEENWRn0tKA6004DvxTkXT");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use((express.json()));

// API routes
app.get('/', (requeswt, response) => response.status(200).send('hello world'));

// Listen command
exports.api = functions.https.onRequest(app);