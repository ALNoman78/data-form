import React from 'react'
import PropTypes from 'prop-types'

const SingleForm = props => {
    return (
        <div>
            <form>
                <input type="text" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

SingleForm.propTypes = {}

export default SingleForm