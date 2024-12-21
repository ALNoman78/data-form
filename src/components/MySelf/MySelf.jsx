import React from 'react'
import PropTypes from 'prop-types'
import SecialFriend from '../Special/SecialFriend'

const MySelf = props => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className='flex'>
                <SecialFriend></SecialFriend>
            </section>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf