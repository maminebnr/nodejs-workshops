const express = require('express');
const router = express.Router()

//array of cars 
let cars = [{id:1,name:'toyota'},{id:2,name:'honda'},{id:3,name:'ford'}]

//get all cars
router.get('/all',(req,res)=>{
    res.send(cars)
})
//get car by id 
router.get('/:id',(req,res)=>{
    const carId = parseInt(req.params.id);
    const car = cars.find(item => item.id === carId)
    if(car){
        res.send(car)
    }else{
        res.status(404).send('Car not found')
    }
})

//create new car 
router.post('/create',(req,res)=>{
    const car = req.body
    cars.push(car)
    res.status(201).send({message:"Car created successfully",data:cars})
})

//update car by id 
router.put('/:id',(req,res)=>{
    const carId = parseInt(req.params.id);
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === carId)
    if(index !== -1){
        cars[index]= updatedCar;
        res.send({message:'car updated successfully',data:cars})
    }else{
        res.status(404).send('car not found')
    }
})

//delete car by id
router.delete('/:id',(req,res)=>{
    const carId = parseInt(req.params.id);
    const index = cars.findIndex(car => car.id === carId)
    if(index !== -1){
        cars.splice(index,1)
        res.send({message:'car deleted successfully',data:cars})
    }else{
        res.status(404).send('car not found')
    }
})





module.exports = router