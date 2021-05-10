import RadioButton from "./RadioButton";
import { FaTimes } from 'react-icons/fa'

const Task = ({ text, done, description, onDelete }) => {
    return (
        <div className='task'>
            <RadioButton done={done} insideColor='#E33E57' borderColor='#212128' width='20' />
            <h1 style={{marginLeft: '30px',}}>{text}</h1>
            <br/>
            <p className='task-description'>{description}</p>
            <FaTimes
                class='deleteTaskButton'
                style={{ color: '#212128', cursor: 'pointer' }}
            />
        </div>
    )
}

export default Task;