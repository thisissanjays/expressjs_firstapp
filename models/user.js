// This file defines the User model for a MongoDB database using Mongoose.
const mongoose = require('mongoose');
// Define the schema for the User model

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mobile_model: {
        type: String,
        
    },
});
const User = mongoose.model('User', userSchema);
module.exports = User;

