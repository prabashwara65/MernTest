const express = require('express');
const { createWorkout } = require('../controller/workoutController');


const router = express.Router();


router.get('/' , (req , res)=> {
    res.json({mssg: "get all workouts"})
})

router.post('/' , createWorkout)


module.exports = router