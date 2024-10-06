const express = require('express');
const connectDB = require('./config/db');
const recommendationRoutes = require('./routes/recommendationRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/api', recommendationRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
