import React from 'react'
import Tasks from '../../HomePage/Tasks/Tasks'
import HideTasksButton from './HideTasksButton'

const TasksThisWeek = ({tasks, day}) => {
    return (
        <div className="tasks-today">
            <HideTasksButton />
            <h1 className='day-text'>{day}</h1>
            <Tasks tasks={tasks} page='this-week-page' />
            <div className="complete-tasks-today"></div>
        </div>
    )
}

export default TasksThisWeek
