const Router = require("express").Router();
const validator= require('../config/validator')
const passport= require('../config/passport')

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

// users

const usersControllers= require('../controllers/usersControllers')
const {signUp,logIn,logOut,verifyEmail,verifyToken} = usersControllers

Router.route('/signUp')
.post(validator,signUp)

Router.route('/logIn')
.post(logIn)

Router.route('/logOut')
.post(logOut)

Router.route('/verify/:uniqueString')
.get(verifyEmail)

Router.route('/logInToken')
    .get(passport.authenticate('jwt', {session: false}), verifyToken)

module.exports= Router 