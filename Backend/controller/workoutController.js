const workoutModel = require('../models/workoutModel')


//get all workout
const getWorkouts = async (req , res) => {

    const workouts = await workoutModel.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get single workout 
const getWorkout = async (req , res) => {

    const { id } = req.params;

    const workout = await workoutModel.findById(id)

    if(!workout){
        const error = new Error('Workout not found');
        return res.status(404).json({error: error.message})
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


//update workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
}