import React from 'react'

const DayTaskBox = ({ numberOfTasks }) => {
    return (
        <span className='day-task-box'>
            { [...Array(numberOfTasks)].map((_, index) => (
                <span 
                    className='task-line' 
                    key={index}
                />
            )) }
        </span>
    )
}

export default DayTaskBox
