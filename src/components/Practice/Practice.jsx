import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const PracticeForm = () => {
    const [name , setName ] = useState(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const userNameRef = useRef(null)

    const handleUserName = e => {
        setName(e.target.value)
    }

    useEffect(() => {
        userNameRef.current.focus()
    } , [])

    const handleForm = e => {
        e.preventDefault();
        console.log(e.target)
        console.log(name)
        console.log(e.target.email.value)
        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div className='md:w-3/12 mx-auto w-full m-3'>
            <form onSubmit={handleForm}>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={userNameRef} onChange={handleUserName} type="text" className="grow" name='email' placeholder="Email"  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={nameRef} type="text" className="grow" placeholder="Username" defaultValue={'jhonDhoe123'} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={passwordRef} type="password" className="grow" placeholder='password' />
                </label>
                <button className='btn w-full btn-success my-3 text-white'> Submit</button>
            </form>
        </div>
    )
}

PracticeForm.propTypes = {}

export default PracticeForm