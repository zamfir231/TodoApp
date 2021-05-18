import Input from "./Input"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ title }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        if (email.length < 5) {
            alert('Email must be longer than 4 characters')
            return
        }

        if (name.length < 2) {
            alert('Name must be longer than 1 character')
            return
        }

        if (password.length < 5) {
            alert('Password must be at least 5 characters long')
            console.log(password)
            return
        }

        if (confirmPassword !== password) {
            alert('Your passwords don\'t match')
            return
        }

        setEmail('')
        setName('')
        setPassword('')
        setConfirmPassword('')

        fetch('/api/sign-up', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
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