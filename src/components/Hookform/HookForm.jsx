import PropTypes from 'prop-types'
import useInputValue from '../../Hooks/useInputState'
import useNewState from '../../Hooks/useNewState'
import { useEffect, useRef, useState } from 'react'
import Notification from '../Notification/Notification'


const HookForm = () => {
    // const [name , handleChangeName] = useInputValue(null);
    // const [email , handleChangeEmail] = useInputValue(null)
    const emailState = useInputValue('default@gmail.com')
    // const passwordState = useInputValue('')
    const passwordHook = useNewState('')
    const passwordRef = useRef('')
    //error handling code execute
    const [error, setError] = useState()

    useEffect(() => {
        passwordRef.current.focus()
    }, [])

    const handleForm = e => {
        e.preventDefault();
        // console.log(name, 'from data')
        // console.log(emailState.value, 'this is form email state as a object')
        // // console.log(passwordState)
        // console.log(passwordHook)
        // console.log(passwordRef.current.value)

        if (passwordRef.current.value.length < 8) {
            setError('This error handle isnot working')
        } else {
            setError()
            console.log(emailState.value, 'this is form email state as a object')
            // console.log(passwordState)
            console.log(passwordHook)
            console.log(passwordRef.current.value)
        }
    }

    return (
        <div className='md:w-3/12 mx-auto w-full m-3'>
            <form onSubmit={handleForm}>
                <label className="input input-bordered flex items-center gap-2">
                    {/* <input onChange={handleChangeName} type="text" className="grow" name='email' placeholder="Email" /> */}
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input {...emailState} type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={passwordRef} {...passwordHook} type="password" className="grow" placeholder='password' />

                </label>
                <button className='btn w-full btn-success my-3 text-white'> Submit</button>
                {
                    error && <p className='text-lg font-bold text-red-600'>Password length should be eight letter</p>
                }
            </form>
        </div>
    )
}

HookForm.propTypes = {}

export default HookForm