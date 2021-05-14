import React from 'react'

const HideTasksButton = ({ onClick }) => {
    return (
        <span 
            className='hide-tasks-button'
            onClick={onClick}
        />  
    )
}

export default HideTasksButton
