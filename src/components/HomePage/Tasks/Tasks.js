import Task from './Task'

const Tasks = ({ tasks, page }) => {
    return (
        <>
            {tasks.map((task, id) => (
                <Task 
                    page={ page }
                    text={ task.text }
                    done={ task.done }
                    description={ task.description }
                    key={id}
                /> 
            ))}
        </>
    )
}

export default Tasks