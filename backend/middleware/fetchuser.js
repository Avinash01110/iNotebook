var jwt = require('jsonwebtoken');

const jwt_secret_key = "...avi@5697310..."

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send({errorr:"Please authenticate using a valid token."})
    }

    try{
        const data = jwt.verify(token, jwt_secret_key)
        req.user =  data.user
        next()
    }catch(error){
        return res.status(401).send({errorr:"Please authenticate using a valid token."})
    }
} 


module.exports = fetchuser