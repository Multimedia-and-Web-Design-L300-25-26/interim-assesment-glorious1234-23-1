const Crypto = require('../models/Crypto');

exports.getAllCrypto = async (req, res) => {
    try {
        const cryptos = await Crypto.find().select('-__v');
        res.status(200).json(cryptos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
};

exports.getGainers = async (req, res) => {
    try {
        const gainers = await Crypto.find().sort({ change24h: -1 }).select('-__v'); 
        res.status(200).json(gainers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching gainers" });
    }
};

exports.getNewListings = async (req, res) => {
    try {
        const newListings = await Crypto.find().sort({ createdAt: -1 }).select('-__v');
        res.status(200).json(newListings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching new listings" });
    }
};

exports.addCrypto = async (req, res) => {
    try {
        const { name, symbol, price, image, change24h } = req.body;
        const newCrypto = new Crypto({ name, symbol, price, image, change24h });
        await newCrypto.save();
        res.status(201).json({ message: "Cryptocurrency added successfully!", data: newCrypto });
    } catch (error) {
        res.status(400).json({ message: "Error adding cryptocurrency", error: error.message });
    }
};