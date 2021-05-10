import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <button>

            </button>
            <button>
                <span 
                    style={{
                        position: 'absolute',
                        left: '10%',
                        display: 'block',
                        width: '75%',
                        height: '2px',
                        backgroundColor: '#FFFFFF'
                    }}
                ></span>
                <span 
                    style={{
                        position: 'absolute',
                        left: '49%',
                        top: '10%',
                        display: 'block',
                        width: '2px',
                        height: '75%',
                        backgroundColor: '#FFFFFF'
                    }}
                ></span>
            </button>
            <button>

            </button>

        </nav>
    )
}

export default Navbar
