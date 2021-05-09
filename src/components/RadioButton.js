import { useState } from 'react'

const RadioButton = ({insideColor, borderColor, width, done}) => {
    const [checked, setChecked] = useState(done);

    return (
        <span
            onClick={() => setChecked(!checked)}
            style ={{
                borderRadius: '50%',
                marginLeft: '5px',
                border: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: `${width}px`,
                height: `${width}px`,
                borderStyle: 'solid',
                borderColor: borderColor,
                backgroundColor: insideColor,
            }}
        >

            {checked && <span
                style={{
                    borderRadius: '50%',
                    border: 'none',
                    width: `${width - 10}px`,
                    height: `${width - 10}px`,
                    display: 'inline',
                    borderStyle: 'solid',
                   backgroundColor: borderColor,   
                }}
            >
            </span> }
        </span>
    )
}

export default RadioButton
