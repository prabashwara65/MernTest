import { useState } from "react";

const WorkoutForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault;

        const workout = {title , reps , load}

        const response = await fetch('api/workout', {
            
        })
    }

    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [reps , setReps] = useState('');
    const [error , setError] = useState(null);

    return (
        <form className="" onSubmit={handleSubmit}>
            <h3>Add new Workout</h3>

            <label>Excercise Title</label>
            <input 
                className="border"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Excercise Load</label>
            <input 
                className="border"
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Excercise Reps</label>
            <input 
                className="border"
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />


            <button>Add New Workout</button>

        </form>
    )
}

export default WorkoutForm;