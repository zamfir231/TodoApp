import React from 'react'
import DayTaskBoxes from '../DayTaskBoxes'
import '../thisWeek.css'
import Header from '../../../HomePage/header/Header'

const ThisMonthPage = ({
    howManyDays, 
    page, 
    onAddTask 
}) => {
    return (
        <div>
            <Header page={page} onAddTask={onAddTask} />
            <DayTaskBoxes howManyDays={howManyDays} />
        </div>
    )
}

export default ThisMonthPage
