import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import WorkoutForm from './Components/WorkoutForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workoutform' element={<WorkoutForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
