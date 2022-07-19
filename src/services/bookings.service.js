// Imports
const mongoose = require("mongoose");
const {
    schema
} = require('../schemas/bookings.schema');
const booking = mongoose.model("booking", schema);

// Create
async function create(user, destination, start, end) {

    return await booking.create({
        userID: user,
        destinationID: destination,
        startDate: start,
        endDate: end
    })
}

// Get by ID
async function getByID(id) {

    let bookings = await booking.findById(id);
    return bookings;
}

// Get All 
async function getAll() {

    let bookings = await booking.find();
    return bookings;
}

// Update 
async function update(id, user, destination, start, end) {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await booking.findByIdAndUpdate(id, {
        userID: user,
        destinationID: destination,
        startDate: start,
        endDate: end
    }, {
        new: true
    });
}

// Delete 
async function remove(id) {

    if (mongoose.isValidObjectId(id)) {
        return await booking.findByIdAndDelete(id);
    }

    return null;
}

// Module Exports
module.exports.create = create;
module.exports.getByID = getByID;
module.exports.getAll = getAll;
module.exports.update = update;
module.exports.delete = remove;