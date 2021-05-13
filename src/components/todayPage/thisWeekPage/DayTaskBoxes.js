import React from 'react'
import DayTaskBox from './DayTaskBox'

const DayTaskBoxes = ({ howManyDays }) => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    return (
        <>
            <div className="task-boxes-container">
                {  days.map((text, index) => (
                    <span 
                        className='day-name' 
                        key={ index }

                    >{ text }</span>
                ))} 
            </div>

            <div className='task-boxes-container'>
            { [...Array(howManyDays)].map((_, index) => (
                <DayTaskBox key={ index } numberOfTasks={3} />
            ))}
            </div>
        </>
    )
}

export default DayTaskBoxes
