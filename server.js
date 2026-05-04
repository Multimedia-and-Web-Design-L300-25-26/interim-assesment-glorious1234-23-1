const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes'); 

const cryptoRoutes = require('./routes/cryptoRoutes'); 

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes); 
app.use('/api/crypto', cryptoRoutes); 

mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
})
  .then(() => console.log("✅ Database Connected Successfully!"))
  .catch((err) => {
    console.error("❌ Connection Error Detail:");
    console.error(err.message);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});