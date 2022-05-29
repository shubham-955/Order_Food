const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String },
    ratings: { type: Number },
    location: { type: String },
    image: { type: String },
    deliveryFee: { type: Number },
    dishes: { type: Array }
}, {
    versionKey: false,
    timestamps: true
})

const Hotel = mongoose.model("hotels", hotelSchema);

module.exports = Hotel