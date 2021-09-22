const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create car schema nad model
const CarSchema = new Schema({
    doors: {
        type: Number,
        required: [true, 'Number of doors is required'],
        validate: {
            validator: Number.isInteger,
            message: `{VALUE} is not an integer value`,
        }
    },
    colour: {
        type: String,
        required: [true, 'Colour is required'],
    },
    make: {
        type: String,
        required: [true, 'Make is required'],
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
    },
});

const Car = mongoose.model('car', CarSchema);

module.exports = Car;