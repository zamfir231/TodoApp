import React from 'react'

const PlusButton = () => {
    return (
        <span  
                name='addButton'
                style={{
                        position: 'absolute', 
                        left: '49.5%', 
                        top: '10%',
                        cursor: 'pointer',
                        width: '25px',
                        height: '12px',
                }}
            >
                <span 
                    name='horizontal-line'
                    style={{
                        position: 'absolute',
                        left: '10%',
                        display: 'block',
                        width: '25px',
                        height: '2px',
                        backgroundColor: '#212128'
                    }}
                ></span>
                <span 
                    name='vertical-line'
                    style={{
                        position: 'absolute',
                        marginLeft: '14px', 
                        marginTop: '-12px',
                        display: 'block',
                        width: '2px',
                        height: '25px',
                        backgroundColor: '#212128'
                    }}
                ></span>
            </span>
    )
}

export default PlusButton
