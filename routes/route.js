const Router = require("express").Router();

const citiesControllers = require ("../controllers/citiesControllers");
const {getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers

Router.route("/cities")
.get(getCities)
.post(addCity)

Router.route ("/cities/:id")
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)


const itineraryControllers = require ("../controllers/itineraryControllers");
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary} = itineraryControllers 

Router.route("/itineraries")
.get(getItineraries)
.post(addItinerary)

Router.route ("/itineraries/:id")
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

module.exports = Router