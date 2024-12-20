import reactLogo from './assets/react.svg'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import SingleForm from './components/SingleForm/SingleForm'
import StateForm from './components/StateForm/StateForm'
import PracticeForm from './components/Practice/Practice'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.name.value)
  }

  return (
    <>
      <h2 className='text-3xl font-bold'>This is react router</h2>
      {/* <SingleForm></SingleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <PracticeForm></PracticeForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm titleName={'Sign Up'}></ReuseableForm>
      <ReuseableForm titleName={'Log In'} submitBtnText={'Update'}></ReuseableForm>
    </>
  )
}

export default App
