import React from 'react'
import PropTypes from 'prop-types'
import Cousin from '../Cousin/Cousin'

const FormTwo = () => {
    return (
        <div>
            <h2>FormTwo</h2>
            <section className='flex items-center'>
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Rafiq'}></Cousin>
            </section>
        </div>
    )
}

FormTwo.propTypes = {}

export default FormTwo