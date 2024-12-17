import React, { useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

const RefForm = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null);
    const emailRef = useRef(null)
    const usernameRef = useRef(null)

    const [error, setError] = useState()

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const handleForm = e => {
        e.preventDefault()
        if (passwordRef.current.value.length < 8) {
            setError('this password is strong')
        } else {
            setError()
            console.log(nameRef.current.value, emailRef.current.value, usernameRef.current.value, passwordRef.current.value)
        }
        // console.log(nameRef.current.value)
        // console.log(emailRef.current.value)
        // console.log(usernameRef.current.value);
        // console.log(passwordRef.current.value)
    }
    return (
        <div className='md:w-3/12 mx-auto w-full'>
            <form onSubmit={handleForm}>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={nameRef} type="text" name='name' className="grow" placeholder="Enter Full Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input ref={emailRef} type="text" className="grow" name='email' placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input ref={usernameRef} defaultValue={'username123'} type="text" className="grow" name='username' placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input ref={passwordRef} type="password" className="grow" name='password' />
                </label>
                {
                    error && <p className='text-lg text-red-600 font-medium'>Password length should be 8-10 letter</p>
                }
                <input type="submit" value="Log In" className='btn btn-success text-white my-3 text-center w-full' />
            </form>
        </div>
    )
}

RefForm.propTypes = {}

export default RefForm