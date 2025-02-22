const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    title: {
       type: String,
        //required: true
    },
    reps: {
        type: Number
    },
    load: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model("Workout" , workoutSchema);