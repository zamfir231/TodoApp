import React from 'react'
import DayTaskBox from './DayTaskBox'

const DayTaskBoxes = ({ howManyDays }) => {
    const days=['M', 'T', 'W', 'T', 'F', 'S', 'S']
    return (
        <>
            {  days.map((text, index) => (
                <span 
                    className='' 
                    key={ index }

                >{ text }</span>
            ))} 

            { [...Array(howManyDays)].map((_, index) => (
                <DayTaskBox key={ index } numberOfTasks={3} />
            ))}
        </>
    )
}

export default DayTaskBoxes
