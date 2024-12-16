import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleForm from './components/SingleForm/SingleForm'
import StateForm from './components/StateForm/StateForm'

function App() {

  return (
    <>
      <h2 className='text-3xl font-bold'>This is react router</h2>
      {/* <SingleForm></SingleForm> */}
      <StateForm></StateForm>
    </>
  )
}

export default App
