import React from 'react'
import { useState , useEffect } from 'react'

const Home = () => {
    const [ workouts , setWorkouts ] = useState([])

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('http://localhost:4000/api/workouts/');
            const json = await response.json()

            console.log(json)
            

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkout()
    }, [])

  return (
    <div className="home">
        <div className="workouts">
            { workouts && workouts.map((workout) => (
                 <p key={workout._id}>{workout.title}</p>
            ))}
        </div>
    </div>
  )
}

export default Home
