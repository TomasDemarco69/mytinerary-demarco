const passport=require('passport')
const jwtStrategy= require('passport-jwt').Strategy
const extractJwt= require('passport-jwt').ExtractJwt

const User= require('../models/user') 

module.exports= passport.use(new jwtStrategy({

    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY

},(jtw_payload, done)=>{
    
    User.findOne({_id:jtw_payload.id})

    .then((user)=>{
        if(!user){
            return done(null, false)
        }
        else {
  
            return done(null,user)
        }
    })
    .catch(error=>{
        console.log(error.status)
        return done(error, false)
    })
}))