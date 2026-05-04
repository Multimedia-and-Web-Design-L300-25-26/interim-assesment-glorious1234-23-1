const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoControllers');
const { protect } = require('../middleware/authmiddleware');

router.get('/', cryptoController.getAllCrypto);
router.get('/gainers', cryptoController.getGainers);
router.get('/new', cryptoController.getNewListings);
router.post('/', protect, cryptoController.addCrypto); 

module.exports = router;