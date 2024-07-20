const User = require('../models/user')


const register = async(username,password)=>{

        const checkUser = await User.findOne({username: username})
        if(checkUser){
            throw new Error('User already registered')
        }
        const user = new User({username,password})
        await user.save()
        return {message:'User registration successful'}

}

module.exports ={register}