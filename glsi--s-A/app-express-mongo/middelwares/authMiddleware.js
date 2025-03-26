const jwt = require('jsonwebtoken');

const authentication = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        res.status(401).send({message:"not authorized"});
    }
    const decoded = jwt.verify(token.replace("Bearer ",""),process.env.JWT_SECRET)
    if(!decoded){
        res.status(401).send({message:"not authorized"});
    }
    req.user = decoded 
    next()
}

module.exports = authentication