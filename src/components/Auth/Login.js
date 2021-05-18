import Input from "./Input"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ title }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        if (email.length < 5) {
            alert('Email must be longer than 4 characters')
            return
        }

        if (password.length <= 5) {
            alert('Password must be at least 5 characters long')
            return
        }

        setEmail('')
        setPassword('')

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json)
            .then(data => console.log(data))
    }

    return (
        <form autoComplete="off" className='login-form' onSubmit={onSubmit}>
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
                <label htmlFor='password' className='helper-text'>Password</label>
                <Input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
                    Login
                </button>

                <p className='text'>
                    Don't have an account?  <Link 
                        to='/sign-up'
                        style={{
                            color: '#E33E57',
                        }}
                    >
                        Sign-up
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default Login