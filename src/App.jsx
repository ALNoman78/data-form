import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SingleForm from './components/SingleForm/SingleForm'
// import StateForm from './components/StateForm/StateForm'
// import PracticeForm from './components/Practice/Practice'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log(data)
  }

  const handleUpdateSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <h2 className='text-3xl font-bold'>This is react router</h2>
      {/* <SingleForm></SingleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <PracticeForm></PracticeForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm titleName={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReuseableForm>
      <ReuseableForm titleName={'Log In'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}></ReuseableForm> */}
      <Header></Header>
    </>
  )
}

export default App
