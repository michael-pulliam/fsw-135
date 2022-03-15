import React from 'react'


export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props


return(
    <form onSubmit={handleSubmit}>
    <div className='signup-form'>
    <div className='signup-inputs'>
        <div className='username-input'>
        <input 
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
        />
        </div>
        
        <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
        />
        </div>
        <div className='auth-btn-div' >
        <button className='auth-btn'>{btnText}</button>
        </div>
        
        <p style={{backgroundColor: "#c00000", color: "#ffffff", textAlign: "center"}}>{ errMsg }</p>
    </div>

    </form>
)
}