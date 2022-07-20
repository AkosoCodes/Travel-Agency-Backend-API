const mongoose = require('mongoose');

let schema = mongoose.Schema({
    city: String,
    country: String,
    description: String,
    imageURL: String,
    review: Number,
    categories: [String]
});

module.exports.schema = schema;

