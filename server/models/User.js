const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [3, "Username must be at least 3 characters."],
        maxLength: [30, "Username must be at most 30 characters."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [6, "Password must be at least 6 characters."]
    },
    firstName: {
        type: String,
        required: [true, "First name is required."],
        trim: true,
        minLength: [3, "First name must be at least 3 characters."],
        maxLength: [50, "First name must be at most 50 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        trim: true,
        minLength: [3, "Last name must be at least 3 characters."],
        maxLength: [50, "Last name must be at most 50 characters."]
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
};
