import Header from './components/HomePage/header/Header'
import Tasks from './components/HomePage/Tasks/Tasks'
import AddTaskInput from './components/HomePage/AddTaskInput'
import { useState } from 'react'
import { 
  BrowserRouter as Router ,
  Route,

} from 'react-router-dom'

const App = () => {
  const [date, setDate] = useState('27')

  const [showAddTaskInput, setshowAddTaskInput] = useState(false)

  const [tasks, setTasks] = useState([
    {
      text: 'Mergi la fotbal',
      description: 'La ora 16:00',
      done: false,
      date: '27',
      day: 'Monday',
      Month: 'Sept',
    },
    {
      text: 'Mergi la scoala',
      description: 'La ora 18:30',
      done: false,
      date: '5',
      day: 'Thursday',
      Month: 'Sept',
    },
    {
      text: 'Ai o excursie',
      description: 'La ora 11:25',
      done: true,
      date: '5',
      day: 'Tuesday',
      Month: 'Oct',
    }
  ])

  const addTask = (task, description) => {
    const newTask = {
      text: task,
      description: description,
      done: false,
      date: '5',
      day: 'Thursday',
      Month: 'Dec'
    }

    setshowAddTaskInput(false)
    
    setTasks([...tasks, newTask])

  }

  const getTasksForToday = () => tasks.filter(task => task.date === date)

  return (
    <Router>
      <div className='container'>
        <Route exact path='/'>
          <Header page='home' onAddTask={() => setshowAddTaskInput(true)} />
          { showAddTaskInput && <AddTaskInput addTask={addTask} onCancel={() => setshowAddTaskInput(false)} /> }
          <Tasks page='home' tasks={ tasks } />
        </Route>

        <Route path='/today'>
          <Header pagee='today' onAddTask={() => setshowAddTaskInput(true)} />
          { showAddTaskInput && <AddTaskInput addTask={addTask} onCancel={() => setshowAddTaskInput(false)} /> }
          <Tasks 
            page='today' 
            tasks={getTasksForToday()}
          />
        </Route>
        
      </div>
    </Router>
  )
}

export default App
