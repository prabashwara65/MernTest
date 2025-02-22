require('dotenv').config()

const express = require("express");
const workoutRoutes = require("./routes/workout")

const app = express();

//middleware
app.use(express.json())

//routes
app.use('/api/workouts' , workoutRoutes)


app.listen(process.env.PORT, () => {
  console.log("Server runs on port " + process.env.PORT);
});
