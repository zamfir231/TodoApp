import React from 'react'
import Header from './header/Header'
import Tasks from './Tasks/Tasks'
import AddTaskInput from './AddTaskInput'

const HomePage = ({ 
    showAddTaskInput,
    onAddTask, 
    page,
    tasks, 
    addTask, 
    onCancel  
}) => {
    return (
        <div id="home-page">
            <Header page={page} onAddTask={onAddTask} />
            { showAddTaskInput && <AddTaskInput addTask={addTask} onCancel={onCancel} /> }
            <Tasks page={page} tasks={ tasks } />
        </div>
    )
}

export default HomePage
