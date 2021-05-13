import HomePage from './components/HomePage/HomePage'
import { useState } from 'react'
import ThisWeekPage from './components/todayPage/thisWeekPage/ThisWeekPage'
import TodayPage from './components/todayPage/TodayPage'
import { 
  BrowserRouter as Router ,
  Route,

} from 'react-router-dom'

const App = () => {
  const [date, setDate] = useState('5')

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

  const addTask = (task, description, date) => {
    const newTask = {
      text: task,
      description: description,
      done: false,
      date: date,
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
          <HomePage 
            showAddTaskInput={showAddTaskInput}
            onAddTask={() => setshowAddTaskInput(!showAddTaskInput)}
            page='home'
            tasks={tasks}
            addTask={addTask}
            onCancel={() => setshowAddTaskInput(false)}
          />
        </Route>

        <Route path='/today'>
          <TodayPage 
            page='today'
            onAddTask={() => setshowAddTaskInput(true)}
            tasks={getTasksForToday()}
          />
        </Route>
        <Route path='/this-week'>
          <ThisWeekPage 
            howManyDays={7} 
            page="this-week" 
            onAddTask={() => setshowAddTaskInput(true)} 
          />
        </Route>
      </div>
    </Router>
  )
}

export default App
