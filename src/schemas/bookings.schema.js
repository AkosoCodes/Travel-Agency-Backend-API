const mongoose = require('mongoose');

let schema = mongoose.Schema({
    
    destinationID: String,
    username: String,
    startDate: String,
    endDate: String,
    
});

module.exports.schema = schema;
