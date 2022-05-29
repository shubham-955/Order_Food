const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    image: { type: String },
    price: { type: Number },
    deliveryFee: { type: Number },
    dish: { type: String },
    quantity: { type: Number }
}, {
    versionKey: false,
    timestamps: true
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart