

const express = require("express");
const Cart = require("../models/Cart.model");
const router = express.Router();

//GET
router.get("/", async (req, res) => {
    try {
        const cart = await Cart.find();
        res.json({ status: 200, cart });
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// POST
router.post('/', async (req, res) => {
    try {
        const cart = await Cart.create({ ...req.body });
        res.json({ status: 200, cart });
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
})

// PUT
router.put("/", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.body, {
            new: true,
        });
        res.status(200).json({ status: 200, cart });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

// DELETE
router.delete("/", async (req, res) => {
    try {
        const cart = await Cart.remove();
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
    }
})




module.exports = router;