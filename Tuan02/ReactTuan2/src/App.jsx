import './App.css'
import Button from './components/Button'
import Greeting from './components/Greeting'

function App() {
  return (
    <>
    <Greeting name='Trường'></Greeting>
    <Button type='primary'>Primary</Button>
    <Button type='danger'>Danger</Button>
    <Button type='success'>Success</Button>
    </>
  )
}

export default App
