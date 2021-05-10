import RadioButton from "./RadioButton";

const Task = ({ text, done, description }) => {
    return (
        <div className='task'>
            <RadioButton done={done} insideColor='#E33E57' borderColor='#212128' width='20' />
            <h1 style={{marginLeft: '30px',}}>{text}</h1>
            <br/>
            <p className='task-description'>{description}</p>
        </div>
    )
}

export default Task;