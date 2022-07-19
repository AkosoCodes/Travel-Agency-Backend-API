const mongoose = require('mongoose');

let schema = mongoose.Schema({
    
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    
});

module.exports.schema = schema;