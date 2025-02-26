const express = require('express');
const { 
    createWorkout,
    getWorkouts,
    getWorkout

} = require('../controller/workoutController');


const router = express.Router();


router.get('/' , getWorkouts)

router.get('/:id' , getWorkout)

router.post('/' , createWorkout)


module.exports = router