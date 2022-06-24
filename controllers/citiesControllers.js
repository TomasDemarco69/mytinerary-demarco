const City = require("../models/city")

const citiesControllers = {
    getCities: async (req, res) => { 
    let cities
    let error = null
    try{
        cities = await City.find().populate("itinerary")
        console.log(cities)
    } catch (err){error = err}
    res.json({
        response: error ? "ERROR": { cities },
        succes: error ? false : true,
        error: error
    })
},
getOneCity: async (req, res) => {
    const id = req.params.id
    let city 
    let error = null
    try{
        city = await City.findOne({_id: id}).populate("itinerary")
    } catch (err) { error = err}
    res.json({
        response: error ? "ERROR" : city,
        success: error ? false : true,
        error: error
    })
},
addCity: async (req, res)=>{
    let city
    let error=null 
   
    const{name, country,image,description}= req.body.data
    try{
        city= await new City({
            name: name,
            country:country,
            image:image,
            description: description
        }).save()
    }catch(err){
        error= err}
   
    res.json({
    response: error ? 'ERROR' : city,
    success: error ? false : true,
    error: error
    })
},
modifyCity: async (req,res)=>{
    const id = req.params.id
    const cities = req.body.data
    let city 
    let error = null
    try{
        city = await City.findOneAndUpdate({_id:id}, cities, {new:true})
    }catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : city,
        success: error ? false : true,
        error: error
    })
},
removeCity: async (req,res) => {
    const id = req.params.id
    let city
    let error = null
    try {
        city = await City.findOneAndDelete({_id: id})
    } catch (err) { error = err}
    res.json ({
        response: error ? "ERROR" : city,
        success: error ? false : true,
        error: error
    })
  }
}
module.exports = citiesControllers