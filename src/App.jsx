import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import MainForm from './components/MainForm/MainForm'
import Recreate from './components/ReCreate/Recreate'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SingleForm from './components/SingleForm/SingleForm'
// import StateForm from './components/StateForm/StateForm'
// import PracticeForm from './components/Practice/Practice'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {

  // const handleSIgnUp = data => {
  //   console.log('Data from SignUp from', data);
  // }
  // const handleUpdateInfo = data => {
  //   console.log('Data from Updated value', data);
  // }

  return (
    <>
      <h2 className='text-3xl font-bold text-center my-2'>Form Master</h2>
      {/* <SingleForm></SingleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <PracticeForm></PracticeForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm titleName={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReuseableForm>
      <ReuseableForm titleName={'Log In'} submitBtnText={'Update'} handleSubmit={handleUpdateSubmit}></ReuseableForm> */}
      {/* <Header></Header> */}
      {/* <Recreate handleSubmit={handleSIgnUp}>
        <div>
          <h2>Sing form</h2>
        </div>
      </Recreate>
      <Recreate
        handleSubmit={handleUpdateInfo}
        submitBtnText={'Update Information'}>
        <div>
          <h2>Update Information From</h2>
        </div>
      </Recreate> */}
      <MainForm></MainForm>
    </>
  )
}

export default App
