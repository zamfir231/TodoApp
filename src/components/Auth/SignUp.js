import Input from "./Input"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ title }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <form className='login-form'>
            <h1 className='auth-title'>{title}</h1>
            <div className='form-control'>
                <label htmlFor='email' className='helper-text'>email</label>
                <Input 
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='name' className='helper-text'>Name</label>
                <Input 
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='password' className='helper-text'>Password</label>
                <Input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='confirmPassword' className='helper-text'>Confirm Password</label>
                <Input
                    type='password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="footer-auth">
                <button
                    type='submit'
                    style={{
                        borderRadius: '6px',
                        backgroundColor: "#E33E57",
                        color:'white',
                        display: 'inline',
                        border: 'none',
                        width: '5em',
                        height: '2rem',
                        marginTop: '20px',
                        marginLeft: '9rem',
                        cursor: 'pointer',
                        marginBottom: '50px',
                    }}
                >
                    Submit
                </button>

                <p className='text'>
                    Already have an account?  <Link 
                        to='/login'
                        style={{
                            color: '#E33E57',
                        }}
                    >
                        Login
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default Login