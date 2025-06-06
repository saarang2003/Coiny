const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    sendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Sender ID is required."]
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Receiver ID is required."]
    },
    senderFirstName: {
        type: String,
        required: [true, "Sender first name is required."]
    },
    senderLastName: {
        type: String,
        required: [true, "Sender last name is required."]
    },
    receiverFirstName: {
        type: String,
        required: [true, "Receiver first name is required."]
    },
    receiverLastName: {
        type: String,
        required: [true, "Receiver last name is required."]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required."],
        min: [1, "Amount must be at least 1."]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const History = mongoose.model("history", HistorySchema);

module.exports = History;
