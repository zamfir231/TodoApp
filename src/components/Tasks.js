import Task from './Task'

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task, id) => (
                <Task 
                    text={ task.text }
                    done={ task.done }
                    key={id}
                /> 
            ))}
        </>
    )
}

export default Tasks