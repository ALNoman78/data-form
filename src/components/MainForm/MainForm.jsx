import React from 'react'
import PropTypes from 'prop-types'
import FormOne from '../FormOne/FormOne'
import FormTwo from '../FormTwo/FormTwo'
import FormThree from '../FormThree/FormThree'
import './mainForm.css'

const MainForm = () => {
    return (
        <div className='mainForm'>
            <h2 className='text-center text-2xl font-bold text-emerald-700 my-2'>Main Form</h2>
            <section className='flex items-center justify-center'>
                <FormOne></FormOne>
                <FormTwo></FormTwo>
                <FormThree></FormThree>
            </section>
        </div>
    )
}

MainForm.propTypes = {}

export default MainForm