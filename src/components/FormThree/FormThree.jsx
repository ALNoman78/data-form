import React from 'react'
import PropTypes from 'prop-types'
import Cousin from '../Cousin/Cousin'

const FormThree = props => {
    return (
        <div>
            <h2>FormThree</h2>
            <section className='flex items-center'>
                <Cousin name={'Man one'}></Cousin>
                <Cousin name={'Man Two'}></Cousin>
            </section>
        </div>
    )
}

FormThree.propTypes = {}

export default FormThree