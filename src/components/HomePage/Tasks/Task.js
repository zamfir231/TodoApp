import RadioButton from "./RadioButton";
import { FaTimes } from 'react-icons/fa'

const Task = ({ page, text, done, description, onDelete }) => {
    return (
        <div className='task' style={{
            backgroundColor: page === 'today' ?  '#212128' : '#E33E57',
            marginLeft: page === 'this-week-page' ? '30vw' : '0',  
            width: page === 'this-week-page' && '50%',  
        }} >
            
            { page==='today' && <span style={{
                position: 'absolute',
                top: '10%',
                width: '80%',
                height: '2px',
                backgroundColor: '#828C8C',
            }}> </span> }

            { page==='this-week-page' && <span style={{
                position: 'absolute',
                top: '10%',
                width: '40%',
                height: '2px',
                backgroundColor: '#828C8C',
            }}> </span> }

            <RadioButton 
                done={done} 
                insideColor={page  === 'today' ?  '#212128' : '#E33E57'} 
                borderColor={page  === 'today' ?  '#E33E57' : '#212128'}
                width='20' 
            />
            <h1 
                style={{
                    marginLeft: '30px', 
                    color: page === 'today' ? '#E33E57' : '#212128',
            }}>{text}</h1>
            <br/>
            <p style={{
                
                color: page === 'today' ? '#E33E57' : '#212128' ,
            }}
                className='task-description'
            >{description}</p>
            { page === 'home' &&
                <FaTimes
                    className='deleteTaskButton'
                    style={{ color: '#212128', cursor: 'pointer' }}
                />
            }
        </div>
    )
}

export default Task;