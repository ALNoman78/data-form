import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AssetContext } from '../MainForm/MainForm'

const SecialFriend = ({assets}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special Friend</h2>
            <p className='text-red-400'>Assets  : {assets}</p>
            <p>Use Context API = {gift}</p>
        </div>
    )
}

SecialFriend.propTypes = {
    assets: PropTypes.string.isRequired,
}

export default SecialFriend