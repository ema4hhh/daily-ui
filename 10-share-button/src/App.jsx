import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <main>
        <button>
          <FontAwesomeIcon icon={faShareNodes} />
          Share
        </button>
      </main>
    </>
  )
}

export default App
