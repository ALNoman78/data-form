import React from 'react'
import PropTypes from 'prop-types'
import SecialFriend from '../Special/SecialFriend'

const MySelf = ({data}) => {
    // console.log(data)
    return (
        <div>
            <h2>MySelf</h2>
            <section className='flex'>
                <SecialFriend assets={data}></SecialFriend>
            </section>
        </div>
    )
}

MySelf.propTypes = {
    data: PropTypes.string,
}

export default MySelf