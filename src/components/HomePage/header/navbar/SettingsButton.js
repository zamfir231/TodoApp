import React from 'react'

const SettingsButton = ({ lines }) => {
    return (
        <span
            name='settings-btn'
            style={{
                position: 'absolute',
                top: '10%',
                left: '90%',
            }}
        >
            {[...Array(lines)].map((value, index) => (
                <span
                    key={index}
                    style={{
                        display: 'block',
                        width: '25px',
                        height: '2px',
                        marginBottom: '3px',
                        backgroundColor: '#212128'
                    }}
                />
            ))}
        </span>
    )
}

export default SettingsButton
