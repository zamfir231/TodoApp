const Input = ({ type, value, onChange }) => {
    return (
        <input 
        	autoComplete='false'
            type={type} 
            value={value}
            onChange={onChange}
            className="auth-input" 
            spellCheck='false'

        />
    )
}

export default Input