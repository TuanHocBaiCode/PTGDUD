import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'

function App() {
const [alertType, setAlertType] = useState("");
  return (
    <>
    <button id='Success' onClick={() => setAlertType("success")}>Success</button>
    <button id='Warning' onClick={() => setAlertType("warning")}>Warning</button>
    <button id='Error' onClick={() => setAlertType("error")}>Error</button>
    <Alert type={alertType}></Alert>
    </>
  )
}

export default App
