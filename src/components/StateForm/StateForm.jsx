import React, { useState } from 'react'
import PropTypes from 'prop-types'

const StateForm = () => {
    const [name , setName] = useState(null)
    const [email , setEmail] = useState(null);
    const [password , setPassword ] = useState(null);

    const handleUserName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handlePassword = e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleEmail = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    onChange={handleUserName}
                className=' p-3 border border-black m-3 rounded-lg' type="text " name='name' placeholder='Name'/>
                <br />
                <input
                    onChange={handleEmail}
                className=' p-3 border border-black m-3 rounded-lg' type="email" name='email' placeholder='Email'/>
                <br />
                <input 
                    onChange={handlePassword}
                className=' p-3 border border-black m-3 rounded-lg' type="password" name="" id="" placeholder='Password'/>
                <br />
                <input className='btn btn-success text-white ml-3' type="submit" value="Submit" />
            </form>
        </div>
    )
}

StateForm.propTypes = {}

export default StateForm