const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes/api');

//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/simpleCars');
mongoose.Promise = global.Promise;

app.use(express.json());

//initialize the routes
app.use('/api', routes)

//error handling middleware
app.use((error, req, res, next) => {
    res.status(422).send({ error: error.message })
});

//listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('Listening for requests...')
});