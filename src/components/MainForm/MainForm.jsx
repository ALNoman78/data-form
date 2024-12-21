import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import FormOne from '../FormOne/FormOne'
import FormTwo from '../FormTwo/FormTwo'
import FormThree from '../FormThree/FormThree'
import './mainForm.css'

export const AssetContext = createContext('gold') // context API install here 
export const MoneyContext = createContext(1000)

const MainForm = () => {
    const [money, setMoney] = useState(1000)
    const assets = 'Diamond';
    return (
        <div className='mainForm'>
            <h2 className='text-center text-2xl font-bold text-emerald-700 my-2'>Main Form</h2>
            <MoneyContext.Provider value={[money , setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex items-center justify-center'>
                        <FormOne prop={assets}></FormOne>
                        <FormTwo data={assets}></FormTwo>
                        <FormThree></FormThree>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    )
}

MainForm.propTypes = {}

export default MainForm

// 1. Create a context and export it.
// 2. Add provider for the context value.
// useContext to access value in the context api
//  3. value could be anything
