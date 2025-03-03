import { useState } from "react";

const WorkoutForm = () => {

    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [reps , setReps] = useState('');
    const [error , setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title , reps , load }

        const response = await fetch('http://localhost:4000/api/workouts', {
            method : "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type" : "application/json"
            }
        })

        const json = await response.json;

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)

            console.log("New record has been added ")
        }
    }


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
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Excercise Reps</label>
            <input 
                className="border"
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />


            <button>Add New Workout</button>
            {error && <div className="text-red-500">{error}</div>}

        </form>
    )
}

export default WorkoutForm;