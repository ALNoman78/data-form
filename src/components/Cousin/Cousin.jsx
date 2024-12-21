import React from 'react'
import PropTypes from 'prop-types'
import SecialFriend from '../Special/SecialFriend'
import Friend from '../Friend/Friend'

const Cousin = ({name , asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <SecialFriend assets={asset}></SecialFriend>}
                {name === 'Man Two' && <Friend></Friend>}
            </section>
        </div>
    )
}

Cousin.propTypes = {
    name: PropTypes.string.isRequired,
    asset: PropTypes.string,
}

export default Cousin