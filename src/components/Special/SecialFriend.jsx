import React from 'react'
import PropTypes from 'prop-types'

const SecialFriend = ({assets}) => {
    return (
        <div>
            <h2>Special Friend</h2>
            <p className='text-red-400'>Assets  : {assets}</p>
        </div>
    )
}

SecialFriend.propTypes = {}

export default SecialFriend