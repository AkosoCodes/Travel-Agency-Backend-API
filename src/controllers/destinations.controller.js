
// Imports
const router = require('express').Router();
const destService = require('../services/destinations.service')


// Creates a new Destination
router.post('/destinations', (req, res) => {

    let city = req.body.city
    let country = req.body.country
    let description = req.body.description
    let imageURL = req.body.imageURL
    let review = req.body.review

    let categories = [];
    categories.push(city.trim().toLowerCase(), country.trim().toLowerCase());
    categories.push(...req.body.categories.map(el => {
        return el.trim().toLowerCase();
    }));

    let destinations = destService.create(city, country, description, imageURL, review, categories);

    res.json(destinations);

})

// Retrieves a Specific Destination using ID
router.get('/destination', async (req, res) => {

    let id = req.query.id;

    let destination = await destService.getByID(id);
    res.json(destination);
});

// Retrieves All Destinations
router.get('/destinations', async (req, res) => {

    let destinations = await destService.getAll();

    res.json(destinations);
});

// Edit Destination
router.put("/destination/", async (req, res) => {

    let id = req.query.id

    let city = req.body.city
    let country = req.body.country
    let description = req.body.description
    let imageURL = req.body.imageURL
    let review = req.body.review
    let categories = req.body.categories

    destination = destService.update(id, city, country, description, imageURL, review, categories);
    res.json(destination);
});

// Removes a Specific Destination using ID
router.delete('/destination/', async (req, res) => {

    let id = req.query.id;
    console.log(id)

    let destination = await destService.delete(id);
    if (destination == undefined) {
        res.json(null);
    } else {
        res.json(destination);
    }


})


// Module Exports
module.exports.controller = router;