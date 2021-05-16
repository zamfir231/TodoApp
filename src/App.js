import HomePage from './components/HomePage/HomePage'
import { useState, useEffect } from 'react'
import ThisWeekPage from './components/todayPage/thisWeekPage/ThisWeekPage'
import TodayPage from './components/todayPage/TodayPage'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import 
ThisMonthPage 
from './components/todayPage/thisWeekPage/thisMonthPage/ThisMonthPage'
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

  useEffect(() => {
    fetch('/api/haha', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            hatz: 'haha',
        }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

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
        <Route exact path='/this-week'>
          <ThisWeekPage 
            tasks={getTasksForToday()}
            howManyDays={7} 
            page="this-week" 
            onAddTask={() => setshowAddTaskInput(true)} 
          />
        </Route>
        <Route exact path='/this-month'>
          <ThisMonthPage
            howManyDays={29}
            page='this-month'
            onAddTask={() => setshowAddTaskInput(true)}
          />
        </Route>
        <Route exact path='/login'>
          <Login title='Login' />
        </Route>
        <Route exact path='/sign-up'>
          <SignUp title='Sign Up' />
        </Route>
      </div>
    </Router>
  )
}

export default App
