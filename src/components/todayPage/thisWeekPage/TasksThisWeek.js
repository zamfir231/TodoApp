import React from 'react'
import Tasks from '../../HomePage/Tasks/Tasks'

const TasksThisWeek = ({tasks, day}) => {
    return (
        <div className="tasks-today">
            <h1 style={{marginRight: '5vh'}}>{day}</h1>
            <Tasks tasks={tasks} page='this-week-page' />
            <div className="complete-tasks-today"></div>
        </div>
    )
}

export default TasksThisWeek
