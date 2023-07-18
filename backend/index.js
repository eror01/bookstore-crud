const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/books', require('./routes/BookRoutes'));
app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});