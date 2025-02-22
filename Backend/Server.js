require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose')
const workoutRoutes = require("./routes/workout")


const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/workouts' , workoutRoutes)


//connect to DB
mongoose.connect(process.env.DB)
.then(() => {
    //listening to requests
    app.listen(process.env.PORT , () => {
        console.log("Connected to DB & Server on Port " + process.env.PORT)
    } )
})
.catch((error) => {
    console.log(error)
})



