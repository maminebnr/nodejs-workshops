const jwt = require('jsonwebtoken')

const authentication = (req,res,next)=>{
   try {
    const token = req.header('Authorization');
    if(!token){
        res.status(401).send({message:'not authorized'})
    }
    if(!token.startsWith('Bearer ')){
        res.status(401).send({message:'not authorized'})
    }
    
    const decoded = jwt.verify(token.replace("Bearer ",""),process.env.JWT_SECRET)
    if(!decoded){
        res.status(401).send({message:'not authorized'})
    }
    req.user = decoded
    next()
   } catch (error) {
    res.send({message:error.message})
   }
}
module.exports = authentication