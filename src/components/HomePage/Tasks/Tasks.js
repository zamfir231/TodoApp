import Task from './Task'

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task, id) => (
                <Task 
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