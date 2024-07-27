const jwt =require('jsonwebtoken')

const authenticate =(req,res,next)=>{
    const token = req.header('Authorization');
    if(!token || !token.startsWith('Bearer ')){
        return res.status(401).send({message:"Authentication failed:invalid_token"});
    }
    try {
        const tokenData = token.split(' ')[1];
        const decodedToken = jwt.verify(tokenData,process.env.JWT_SECRET)
        console.log(decodedToken);
        req.userId=decodedToken.userId;
        next()
    } catch (error) {
        return res.status(401).send({message:"Authentication failed:invalid_token"});
    }
}

module.exports=authenticate