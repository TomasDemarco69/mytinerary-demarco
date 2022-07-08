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
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary,likeAndDislike} = itineraryControllers 

Router.route("/itineraries")
.get(getItineraries)
.post(addItinerary)

Router.route ("/itineraries/:id")
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route("/itineraries/like/:id")
.put(passport.authenticate('jwt', {session: false}),likeAndDislike)

// activities

const activitiesControllers = require ("../controllers/activitiesControllers");
const {getActivities, getOneActivity, addActivity, modifyActivity, removeActivity} = activitiesControllers 

Router.route("/activities")
.get(getActivities)
.post(addActivity)

Router.route ("/activities/:id")
.delete(removeActivity)
.put(modifyActivity)
.get(getOneActivity)

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