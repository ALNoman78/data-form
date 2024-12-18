import React from 'react'
import PropTypes from 'prop-types'

const HookForm = () => {

    const handleForm = e => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div className='md:w-3/12 mx-auto w-full m-3'>
            <form onSubmit={handleForm}>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" name='email' placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Username" defaultValue={'jhonDhoe123'} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder='password' />
                </label>
                <button className='btn w-full btn-success my-3 text-white'> Submit</button>
            </form>
        </div>
    )
}

HookForm.propTypes = {}

export default HookForm