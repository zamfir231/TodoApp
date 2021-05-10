import React, { useState } from 'react'
import { 
    TextField,
    Grid,
    Typography, 
    FormControl, 
    FormControlLabel

} from '@material-ui/core'

const AddTaskInput = ({addTask, onCancel}) => {
    const [taskValue, setTaskValue] = useState('')
    const [taskDescripton, setTaskDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (taskValue.length < 2) {
            alert('Task must be longer than 1 character');
            return
        }

        addTask(taskValue, taskDescripton)
        setTaskValue('')
        setTaskDescription('')
    }

    return (
        <form className='addTaskForm' onSubmit={onSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography style={{color:'#FFF'}} component="h4" variant="h4">
                        Add New Task
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <label style={{color:'#FFF'}} htmlFor='taskContent'>Task</label>
                    <TextField 
                        required={false}
                        type='text'
                        defaultValue=''
                        onChange={(e) => setTaskValue(e.target.value)}
                        inputProps={{
                            style: {textAlign: 'center',  color: '#FFFFFF'},
                        }}
                    />
                </Grid>
                <Grid item xs={12} align='center'>
                    <label style={{color:'#FFF'}} htmlFor='taskDescription'>Description</label>
                    <TextField 
                        required={false}
                        type='text'
                        defaultValue=''
                        onChange={(e) => setTaskDescription(e.target.value)}
                        inputProps={{
                            style: {textAlign: 'center',  color: '#FFFFFF'},
                        }}
                    />
                </Grid>
                <button
                    type="button"
                    onClick={onCancel}
                    style={{
                        backgroundColor: "#E33E57",
                        color:'white',
                        display: 'inline',
                        border: 'none',
                        width: '70px',
                        height: '30px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        marginBottom: '50px',
                    }}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#E33E57",
                        color:'white',
                        width: '70px',
                        height: '30px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        marginBottom: '50px',
                        marginLeft: '37px',                        
                        display: 'inline',
                        border: 'none',
                        
                    }}
                >
                    Add
                </button>
            </Grid>
        </form>
    )
}

export default AddTaskInput
