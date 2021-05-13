import React from 'react'
import DayTaskBoxes from './DayTaskBoxes'
import TasksThisWeek from './TasksThisWeek'
import './thisWeek.css'
import Header from '../../HomePage/header/Header'

const ThisWeekPage = ({ 
    tasks,
    howManyDays, 
    page, 
    onAddTask 
}) => {
    return (
        <div>
            <Header page={page} onAddTask={onAddTask}/>
            <DayTaskBoxes howManyDays={howManyDays} /> 
            <TasksThisWeek tasks={tasks} day='Monday' />
        </div>
    )   
}

export default ThisWeekPage
