import RadioButton from "./RadioButton";
import { FaTimes } from 'react-icons/fa'

const Task = ({ page, text, done, description, onDelete }) => {
    return (
        <div className='task' style={{
            backgroundColor: page === 'home' ? '#E33E57' : '#212128',
        }} >
            
            { page==='today' && <span style={{
                position: 'absolute',
                top: '10%',
                width: '80%',
                height: '2px',
                backgroundColor: '#828C8C',
            }}> </span> }

            <RadioButton 
                done={done} 
                insideColor={page  === 'home' ? '#E33E57' : '#212128'} 
                borderColor={page  === 'home' ? '#212128' : '#E33E57'}
                width='20' 
            />
            <h1 
                style={{
                    marginLeft: '30px', 
                    color: page === 'home' ? '#212128' : '#E33E57',
            }}>{text}</h1>
            <br/>
            <p style={{
                
                color: page === 'home' ? '#212128' : '#E33E57' ,
            }}
                className='task-description'
            >{description}</p>
            <FaTimes
                className='deleteTaskButton'
                style={{ color: '#212128', cursor: 'pointer' }}
            />
        </div>
    )
}

export default Task;