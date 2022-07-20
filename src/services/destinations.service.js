// Imports
const mongoose = require("mongoose");
const { schema } = require('../schemas/destinations.schema');
const dest = mongoose.model("destination", schema);


// Create 
async function create(City, Country, Description, ImgURL, Review, Category) {

    return await dest.create({
        city: City,
        country: Country,
        description: Description,
        imageURL: ImgURL,
        review: Review,
        categories: Category
    })
}

// Get All 
async function getAll() {

    let destinations = await dest.find();
    return destinations;
}

// Get by ID 
async function getByID(id) {

    let destinations = await dest.findById(id);
    return destinations;
}

// Update 
async function update(id, City, Country, Description, ImgURL, Review, Category) {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await dest.findByIdAndUpdate(id, {
        city: City,
        country: Country,
        description: Description,
        imageURL: (ImgURL !== "" ? ImgURL : destination.ImgURL),
        review: Review,
        categories: Category
    }, {
        new: true
    });
}
// Delete 
async function remove(id) {

    if (mongoose.isValidObjectId(id)) {
        return await dest.findByIdAndDelete(id);
    }

    return null;
}

// Module Exports
module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.update = update;
module.exports.delete = remove;