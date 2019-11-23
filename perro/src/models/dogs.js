const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    raza: String,
    nombre: String,
    edad: Number,
    dueño: String,
    vacuna: String,
    enfermo: String
});

module.exports = mongoose.model('dogs',DogSchema);
