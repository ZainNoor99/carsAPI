const express = require('express');
const router = express.Router();
const Car = require('../models/car');

//get list of cars
router.get('/cars', async (req, res, next) => {
    try {
        res.send(await Car.find({}));
    } catch (error) {
        next(error);
    }
});

//add a new car
router.post('/cars', async (req, res, next) => {
    try {
        const car = await Car.create(req.body);
        res.send(car);
    } catch (error) {
        next(error);
    }
});


//update a car
router.put('/cars/:id', async (req, res, next) => {
    try {
        await Car.findByIdAndUpdate({ _id: req.params.id }, req.body);
        const updatedCar = Car.findOne({ _id: req.params.id }) 
        res.send(await updatedCar);
    } catch (error) {
        next(error);
    }
});


//delete a car
router.delete('/cars/:id', async (req, res, next) => {
    try {
        const removedNinja = await Car.findByIdAndRemove({ _id: req.params.id });
        res.send(removedNinja);
    } catch (error) {
        next(error);
    }
});

module.exports = router;