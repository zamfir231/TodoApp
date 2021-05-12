import React from 'react'

const DayTaskBox = ({ numberOfTasks }) => {
    return (
        <span className='dayTaskBox'>
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
