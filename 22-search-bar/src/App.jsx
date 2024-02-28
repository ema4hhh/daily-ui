import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <nav>
        <form>
          <input placeholder={`How to center a div`} />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </nav>
    </>
  )
}

export default App
