import React from 'react'

const DayPageButton = ({date}) => {
    return (
        <span
                name='dayButton'
                style={{
                        position: 'absolute', 
                        left: '10%', 
                        top: '5%',
                        cursor: 'pointer',
                        width: '25px',
                        height: '25px',
                }}
            >
                <span 
                    name='icon'
                    style={{
                        width: '25px',
                        height: '25px',
                        display: 'block',
                        borderRadius: '8px',
                        borderColor: 'red',
                        border: 'solid #212128',
                        borderWidth: '2px 2x',
                }}>
                    <span
                        name='line' 
                        style={{
                            position: 'absolute',
                            width: '101%',
                            height: '2px',
                            display: 'block',
                            backgroundColor: '#212128',
                            top: '35%',                       
                        }}
                    />
                    <span 
                        name='date-text'
                        style={{
                            fontSize: '10px',
                            position: 'absolute',
                            bottom: '10%',
                            left: '35%',
                        }}
                    >
                        {date}
                    </span>
                </span>
                </span>
    )
}

export default DayPageButton
