import React from 'react'
import Header from '../HomePage/header/Header'
import Tasks from '../HomePage/Tasks/Tasks'

const TodayPage = ({
    page,
    onAddTask,
    tasks,
}) => {
    return (
        <div id="today-page">
            <Header 
                page={page} 
                onAddTask={onAddTask} 
            />
            <Tasks 
                page={page}
                tasks={tasks}
            />
        </div>
    )
}

export default TodayPage
