import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <main>
        <div className='success'>
          <span className='icon'><FontAwesomeIcon icon={faCheck} /></span>
          <span>Success. You can go further with your dream</span>
          <button>Get On</button>
        </div>

        <br />

        <div className='error'>
          <span className='icon'><FontAwesomeIcon icon={faXmark} /></span>
          <span>Error. You cannot go further with your dream</span>
          <button>Get On</button>
        </div>
      </main>
    </>
  )
}

export default App
