const workoutModel = require('../models/workoutModel')
const mongoose = require('mongoose')


//get all workout
const getWorkouts = async (req , res) => {

    const workouts = await workoutModel.find({}).sort({createdAt: -1})
    res.status(200).json({message: "get all success" , workouts})
}

//get single workout 
const getWorkout = async (req , res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such id and no workout"})
    }

    const workout = await workoutModel.findById(id)

   
    if(!workout){
        
        return res.status(404).json({message: 'error get workout'})
    }

    res.status(200).json(workout)
}

//post new workout
const createWorkout = async (req , res) => {

    const {title , reps , load} = req.body;

    try{
        const workout = await workoutModel.create({ title , reps , load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//delete workout 
const deleteWorkout = async (req , res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Workout"})
    }

    const workouts = await workoutModel.findByIdAndDelete({_id: id});

    if(!workouts){
        return res.status(400).json({error: "No such Workout"})
    }

    res.status(200).json(workouts)
}


//update workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
}