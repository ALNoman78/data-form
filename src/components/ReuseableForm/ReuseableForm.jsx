import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ReuseableForm = ({ titleName, handleSubmit, submitBtnText = 'Submit', children }) => {
    const nameRef = useRef('')

    // useEffect(() => {
    //     nameRef.current.focus()
    // }, [])

    const handleLocalForm = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div className='text-center'>
            {children}
            {/* another option is going to [Children] */}
            {/* <h3 className='text-xl font-bold'>{titleName}</h3> */}

            {/* handleLocalServer to onSubmit handler */}
            <form onSubmit={handleLocalForm}>
                <input ref={nameRef} type="text" name='name' className='border border-black p-2 m-2 rounded-lg' />
                <br />
                <input type="email" name='email' className='border border-black p-2 m-2 rounded-lg' />
                <br />
                <input type="password" name='password' className='border border-black p-2 m-2 rounded-lg' />
                <br />
                <input className='btn btn-success m-2 text-white' type="submit" value={submitBtnText} />
            </form>
        </div>
    )
}

ReuseableForm.propTypes = {}

export default ReuseableForm