import RadioButton from "./RadioButton";

const Task = ({ text, done }) => {
    return (
        <div className='task'>
            <RadioButton done={done} insideColor='#E33E57' borderColor='#212128' width='20' />
            <h1 style={{marginLeft: '30px',}}>{text}</h1>
        </div>
    )
}

export default Task;