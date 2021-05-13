import React from 'react'
import DayTaskBoxes from './DayTaskBoxes'
import './thisWeek.css'
import Header from '../../HomePage/header/Header'

const ThisWeekPage = ({ howManyDays, page, onAddTask }) => {
    return (
        <div>
            <Header page={page} onAddTask={onAddTask}/>
            <DayTaskBoxes howManyDays={howManyDays} />
            <div style={{width: '100px', height: '10000px'}}></div>
        </div>
    )
}

export default ThisWeekPage
