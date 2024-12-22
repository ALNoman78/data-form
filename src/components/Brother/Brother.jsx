import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MoneyContext } from '../MainForm/MainForm'

const Brother = props => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Main money : {money}</p>
        </div>
    )
}

Brother.propTypes = {}

export default Brother