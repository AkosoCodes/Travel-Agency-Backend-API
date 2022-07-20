// Imports
const mongoose = require("mongoose");
const { schema } = require('../schemas/users.schema');
const user = mongoose.model("user", schema);

// Create
async function create(fName, lName, Username, Password) {

    return await user.create({
        firstName: fName,
        lastName: lName,
        username: Username,
        password: Password
    })
}

// Get by ID
async function getByID(id) {

    let users = await user.findById(id);
    return users;
}

// Get All 
async function getAll() {

    let users = await user.find();
    return users;
}

// Update 
async function update(id, fName, lName, Username, Password) {
    if (!mongoose.isValidObjectId(id)) {
        return null;
    }

    return await user.findByIdAndUpdate(id, {
        firstName: fName,
        lastName: lName,
        username: Username,
        password: Password
    }, {
        new: true
    });
}

// Delete 
async function remove(id) {

    if (mongoose.isValidObjectId(id)) {
        return await user.findByIdAndDelete(id);
    }

    return null;
}

async function loginUser(username, pass){
    if(username == undefined || pass == undefined){
        return;
    }
    return await user.findOne({username: username, password: pass});
}

// Module Exports
module.exports.create = create;
module.exports.getByID = getByID;
module.exports.getAll = getAll;
module.exports.update = update;
module.exports.delete = remove;
module.exports.loginUser = loginUser;