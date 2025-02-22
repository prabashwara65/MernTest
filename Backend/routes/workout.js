const express = require('express');
const workoutModel = require('../models/workoutModel')

const router = express.Router();


router.get('/' , (req , res)=> {
    res.json({mssg: "get all workouts"})
})

router.post('/' , async (req , res) => {
    const {title , reps , load} = req.body;

    try{
        const workout = await workoutModel.create({ title , reps , load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error : error.message})
    }
})


module.exports = router