import { useState } from "react";

const WorkoutForm = () => {

    const [title , setTitle] = useState('');
    const [load , setLoad] = useState('');
    const [reps , setReps] = useState('');

    return (
        <form className="border-4">
            <h3>Add new Workout</h3>

            <label>Excercise Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Excercise Load</label>
            <input 
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Excercise Reps</label>
            <input 
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

        </form>
    )
}

export default WorkoutForm;