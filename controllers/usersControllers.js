const User= require('../models/user')
const bcryptjs= require('bcryptjs') 
const crypto= require('crypto') 
const verification = require('./verification')
const jwt = require('jsonwebtoken')

const userControllers ={
    signUp:async (req,res)=>{
        let {name,lastName,email,password,country,imageUser,role,from}= req.body.userData

        try{
           
            const userExists = await User.findOne({email})
            
            if(userExists) {
            
                if(userExists.from.indexOf(from) !== -1){
                    res.json({
                        success:false,
                        from:from,
                        message: 'You are already registered with'+' '+from+' '+',LOG IN!'
                    })
                }
     
                else{
                    const passwordHash= bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.password.push(passwordHash)
    

                    if(from === "singUp"){
                        userExists.uniqueString= crypto.randomBytes(15).toString('hex')
                        await userExists.save()
                        await verification(email, userExists.uniqueString) 
                        res.json({
                            success: true,
                            from:from,
                            message:"please verify your email"
                        })
                    } else{
                        userExists.userVerification =true 
                        userExists.save()
                        res.json({
                            success:true,
                            from:from,
                            message: from +' '+'has been added to your login method'
                        })
                    }
                    
                } 
            }
                    else {
                        const passwordHash= bcryptjs.hashSync(password, 10)
                       
                        const uniqueString = crypto.randomBytes(15).toString('hex')
                     
                        const newUser= await new User({
                            name,
                            lastName,
                            country,
                            imageUser,
                            email,
                            role,
                            userVerification:false,
                            uniqueString:uniqueString,
                            password:[passwordHash],
                            from : [from]

                        })
  
                        if(from !== 'signUp'){
                            await newUser.save()
                            res.json({
                                success: true,
                                from:from,
                                message: `check ${email} and finish you Sign up` 
                            })
                        } 
                        else{ 
                                await newUser.save()
                                await verification(email, newUser.uniqueString) 
                                res.json({
                                    success: true,
                                    from:from,
                                    message: 'Confirm your email verification'
                                })
                        }
                    } 
            } catch(error){
                console.log(error)
                res.json({
                    success: false,
                    message:'Something went wrong, please try again later' 
                })
            }
        
        },

    
logIn: async (req, res)=>{
    const {email, password, from}= req.body.logInUser
    try{
        const userExists=await User.findOne({email})
        console.log(userExists);
        let passwordCoincide= userExists.password.filter(pass=> bcryptjs.compareSync(password, pass))
        if(from !== 'signUp'){
            
            if(passwordCoincide.length > 0){
                const userData = {
                    id:userExists._id,
                    name: userExists.name,
                    lastName: userExists.lastName,
                    email: userExists.email,
                    imageUser: userExists.imageUser,
                    country: userExists.country,
                    from:from
                }
                await userExists.save()
                const token= jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:60*60*24})
              
                res.json({
                    success:true,
                    from:from,
                    response:{token,userData},
                    message: 'WELCOME BACK' + userData.name + userData.lastName
                })
    
            } else {
                res.json({
                    success: false,
                    from:from,
                    message:'no register with' + from
                })
            }
        }
        else {
            if(passwordCoincide.length>0) {
         
                if(userExists.userVerification){
                    const userData = {
                        id:userExists._id,
                        name: userExists.name,
                        lastName: userExists.lastName,
                        email: userExists.email,
                        imageUser: userExists.imageUser,
                        country: userExists.country,
                        from:from
                    }
                    await userExists.save()
                    const token= jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:60*60*24})
            
                    res.json({
                        success:true,
                        from:from,
                        response:{token, userData},
                        message:'WELCOME' + userData.name + userData.lastName
                    })
                }
                
                else {
                    res.json({
                        success:false,
                        from:from,
                        message:'verify email'
                    })
                }
                
                
            } else{
                res.json({
                    success:false,
                    from:from,
                    message:'el usuario o password no coinciden'
                })
        }
        } 
    } catch(error){
        console.log(error)
        res.json({
            success: false,
            message:'Something went wrong, please try again later'
        })
    }
    
},
        logOut: async (req,res)=>{
            const email= req.body.closeUser
            const user= await User.findOne({email})
            await user.save()
            res.json({
                success:true,
                message:'Deslogueado'
            })
        },

        verifyEmail: async(req, res)=>{
            const {uniqueString} = req.params
            const user= await User.findOne({uniqueString: uniqueString})

            if(user) {
                user.userVerification= true
                await user.save()
                res.redirect("http://localhost:3000/logIn")
            }
            else {res.json({
                success: false,
                message: 'email no confirmed'
            })}
        },

        verifyToken: async (req,res)=>{


            if(req.user) {
                res.json({
                    success:true,
                    response:{
                        id:req.user._id,
                        name:req.user.name ,
                        lastName: req.user.lastName,
                        email: req.user.email,
                        imageUser: req.user.imageUser,
                        country:req.user.country,
                        from:'token'
                    },
                    message: 'WelcomeBack' +' '+req.user.name + req.user.lastName
                })
            }
            else {
                res.json({
                    success: false,
                    message: 'Please do LOGIN again' 
                })
            }
        }
}
module.exports= userControllers
