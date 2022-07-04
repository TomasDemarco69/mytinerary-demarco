const joi= require('joi') 

const validator= (req, res , next) =>{
    //console.log(req.body.userData);
    const schema = joi.object({
        name: joi.string()
       
        .min(4)
        .max(20)
        .required()
        .messages({
            'string.min':'"name": error min 4 characters',
            'string.max':'"name": error max 20 characters'
        }),
        lastName: joi.string()

        .min(4)
        .max(20)
        .required()
        .messages({
            'string.min':'"lastName": error min 4 characters',
            'string.max':'"lastName": error max 20 characters'
        }),
        email: joi.string()
            .email({minDomainSegments:2})
            .required()
            .messages({ 'string.email':'"email": incorrect format'
        }),
        
        password: joi.string()
        .min(2)
        .max(40)
        .required()
        .messages({
            'string.min':'"password": error min 2 characters',
            'string.max':'"password": error max 20 characters'
        }),
        country:joi.string()
        .required()
        .min(2)
        .max(20)
        .messages({
            'string.min':'"country": error min 2 characters',
            'string.max':'"country": error max 20 characters'
        }),
        imageUser:joi.string()
        .min(3)
        .messages({
            'string.min':'"imageUser": error min 3 characters',
        }),
        role:joi.string()
        .required()
        .min(2)
        .messages({
            'string.min':'"role": error min 2 characters',
        }),
                
        from: joi.string().required()
    })
        const validation= schema.validate(req.body.userData, {abortEarly:false})
            if(validation.error) {
                //console.log(validation);
                return res.json({
                    success: false,
                    from:"validator",
                    message: validation.error.details,
                    test: validation
                })
            }
    next()
}
module.exports= validator