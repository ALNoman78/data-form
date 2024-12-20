import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ReuseableForm = ({ titleName, handleSubmit, submitBtnText = 'Submit' }) => {
    const nameRef = useRef('')
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(e.target.name.value);
    //     console.log(nameRef.current.value)
    // }
    return (
        <div className='text-center'>
            <h3 className='text-xl font-bold'>{titleName}</h3>
            <form onSubmit={handleSubmit}>
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