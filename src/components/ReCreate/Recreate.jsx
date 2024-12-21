import React from 'react'
import PropTypes from 'prop-types'

const Recreate = ({children , submitBtnText = 'Submit ' , handleSubmit}) => {

    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
        handleSubmit(data) ; // function(parameter)
    }
    return (
        <div className='text-center md:w-3/12 mx-auto p-4 m-2'>
            <h2 className='text-xl font-bold'>{children}</h2>
            <form onSubmit={handleLocalSubmit}>
                <label className="input input-bordered flex items-center gap-2 m-2">
                    Name
                    <input type="text" name='name' className="grow" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 m-2">
                    Email
                    <input type="text" name='email' className="grow" placeholder="daisy@site.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2 m-2">
                    <input type="password" name='password' className="grow" placeholder="password" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
                <input className='btn btn-success text-white w-full m-2' type="submit" value={submitBtnText} />
            </form>
        </div>
    )
}

Recreate.propTypes = {}

export default Recreate