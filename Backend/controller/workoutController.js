const workoutModel = require('../models/workoutModel')




//get all workout 


//get single workout 


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
}