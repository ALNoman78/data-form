import React from 'react'
import PropTypes from 'prop-types'
import SecialFriend from '../Special/SecialFriend'

const Cousin = ({name , asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <SecialFriend assets={asset}></SecialFriend>}
            </section>
        </div>
    )
}

Cousin.propTypes = {
    name: PropTypes.string.isRequired,
    asset: PropTypes.string,
}

export default Cousin