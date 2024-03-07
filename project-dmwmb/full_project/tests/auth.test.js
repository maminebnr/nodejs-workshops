const request = require('supertest')
const app = require('../app')

describe('Authentication Endpoinds', () => {
    it('should register a new user',async () =>{
        try {
            const res = await request(app)
        .post('/auth/register')
        .send({username:"aminetest",password:"azerty123"});
      expect(res.statusCode).toEqual(201);
      expect(res.text).toContain('User registered successfully')
        } catch (error) {
           console.error(error) 
        }
    })
})