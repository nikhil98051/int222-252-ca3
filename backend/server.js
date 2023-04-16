const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0/projectca", { useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB database connection established successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });

const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');

app.use('/exercise', exercisesRouter);
app.use('/user', usersRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
