import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import FormOne from '../FormOne/FormOne'
import FormTwo from '../FormTwo/FormTwo'
import FormThree from '../FormThree/FormThree'
import './mainForm.css'

const AssetContext = createContext('gold')

const MainForm = () => {
    const assets = 'Diamond';
    return (
        <div className='mainForm'>
            <h2 className='text-center text-2xl font-bold text-emerald-700 my-2'>Main Form</h2>
            <AssetContext.Provider value='gold'>
                <section className='flex items-center justify-center'>
                    <FormOne prop={assets}></FormOne>
                    <FormTwo data={assets}></FormTwo>
                    <FormThree></FormThree>
                </section>
            </AssetContext.Provider>
        </div>
    )
}

MainForm.propTypes = {}

export default MainForm

// 1. Create a context and export it.
// 2. Add provider for the context value.
