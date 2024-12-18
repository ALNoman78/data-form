import PropTypes from 'prop-types'
import useInputValue from '../../Hooks/useInputState'

const HookForm = () => {
    // const [name , handleChangeName] = useInputValue(null);
    // const [email , handleChangeEmail] = useInputValue(null)
    const emailState = useInputValue('default@gmail.com')

    const handleForm = e => {
        e.preventDefault();
        // console.log(name, 'from data')
        console.log(emailState.value , 'this is form email state as a object')
    }

    return (
        <div className='md:w-3/12 mx-auto w-full m-3'>
            <form onSubmit={handleForm}>
                <label className="input input-bordered flex items-center gap-2">
                    {/* <input onChange={handleChangeName} type="text" className="grow" name='email' placeholder="Email" /> */}
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input {...emailState} type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder='password' />
                </label>
                <button className='btn w-full btn-success my-3 text-white'> Submit</button>
            </form>
        </div>
    )
}

HookForm.propTypes = {}

export default HookForm