const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
const { applyTimestamps } = require('./models/userModel');

//congif dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express()

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users', require('./routes/userRoute'))

//transection routes
app.use('/api/v1/transections', require
    ("./routes/transectionRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});