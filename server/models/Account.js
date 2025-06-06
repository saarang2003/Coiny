const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required."]
    },
    balance: {
        type: Number,
        required: [true, "Account balance is required."],
        min: [0, "Balance cannot be negative."]
    }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
    Account
};
