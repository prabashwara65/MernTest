const WorkoutDetails = ({ workout }) => {
  return (
    <div className="w-100 bg-amber-100 p-4 m-4 shadow rounded-2xl">
      <h4>{workout.title}</h4>
      <p> Load (KG) {workout.load}</p>
      <p> Reps {workout.reps}</p>
      <p> {workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
