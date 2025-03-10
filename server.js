const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

//config dot env file
dotenv.config();

//database call
connectDb()

//rest object
const app = express()

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users', require('./routes/userRoutes'))

//port
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});