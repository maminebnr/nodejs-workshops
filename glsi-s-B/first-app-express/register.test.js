const request = require('supertest')
const app = require('./app')
const User = require('./models/user')

jest.mock('./models/user'); //mock User
jest.mock('jsonwebtoken',()=>({
    sign:jest.fn()
}))

describe('POST /register',()=>{
    it('should return 400 if email already exis',async ()=>{
        //Mock found user to return existing user
        User.findOne.mockresolvedValue({email:'test@gmail.com'})
        const response = await request(app)
        .post('/user/register')
        .send({name:"ali",email:'test@gmail.com',password:"123456",age:25})

        expect(response.status).toBe(400)   // expected 
        expect(response.body.message).toBe('email already registred')                                                                                                                                    
    })
})