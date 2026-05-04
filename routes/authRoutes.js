const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authmiddleware');

// Requirement 1: Authentication System
router.post('/register', registerUser);
router.post('/login', loginUser);

// Requirement 2: Protected User Profile Page
router.get('/profile', protect, getProfile);

module.exports = router;