const mongoose=  require('mongoose')

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:Array, required:true},
    country: {type: String},
    imageUser:{type:String, required:true},
    role:{type: String, required: true },
    from: {type:Array, required:true},
    uniqueString:{type:String},
    userVerification:{type:Boolean} 
  
})
const User= mongoose.model('user',userSchema)
module.exports=User