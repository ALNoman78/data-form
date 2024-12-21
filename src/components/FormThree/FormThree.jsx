import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Cousin from '../Cousin/Cousin'
import { AssetContext, MoneyContext } from '../MainForm/MainForm'

const FormThree = props => {
    const assets = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>FormThree</h2>
            <section className='flex items-center'>
                <Cousin name={'Man one'}></Cousin>
                <Cousin name={'Man Two'}></Cousin>
            </section>
            <p>Money : {money} </p>
            <button onClick={() => setMoney(money + 1000)}>Add Money</button>
        </div>
    )
}

FormThree.propTypes = {}

export default FormThree