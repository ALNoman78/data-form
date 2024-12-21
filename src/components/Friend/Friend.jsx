import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AssetContext } from '../MainForm/MainForm'

const Friend = () => {
    const names = useContext(AssetContext)
    return (
        <div>
            <h2>Friend has {names}</h2>
        </div>
    )
}

Friend.propTypes = {}

export default Friend