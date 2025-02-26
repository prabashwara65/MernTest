import React from 'react'
import { useState , useEffect } from 'react'
import WorkoutDetails from '../Components/WorkoutDetails'

const Home = () => {
    const [ workouts , setWorkouts ] = useState([])

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('http://localhost:4000/api/workouts/');
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkout()
    }, [])

  return (
    <div className="flex min-h-screen bg-teal-100 justify-between ">
        <div className="workouts">
            { workouts && workouts.map((workout) => (
                 <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
    </div>
  )
}

export default Home
