import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

function App() {
  const [check, setCheck] = useState(false)

  const handleChange = () => {
    setCheck(!check)
  }
  return (
    <>
      <main>
        <h1 className={check && 'light'}>Magic!</h1>
        <div className={`icon ${check && 'light'}`}>
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <label  className='switch'>
          <input onChange={handleChange} type='checkbox' />
          <span className='slider'></span>
        </label>
      </main>
    </>
  )
}

export default App
