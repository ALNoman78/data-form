import React from 'react'
import PropTypes from 'prop-types'
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const FormOne = ({prop}) => {
    // console.log(prop)
    return (
        <div>
            <h2 className='text-center text-lg'>FormOne</h2>
            <section className='flex'>
                <MySelf data={prop}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    )
}

FormOne.propTypes = {}

export default FormOne