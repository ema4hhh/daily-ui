import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faComments } from '@fortawesome/free-regular-svg-icons'



function App() {
  return (
    <>
      <main>
        <h1>
          Chat App
          <FontAwesomeIcon icon={faComments} />
        </h1>

        <div className='chat-container'>
          <div className='chat-box'>
            <div className='chat-message'>
              <span className='user'>John Doe</span>
              <p>Hello, how are you?</p>
              <span className='time'>10:00 AM</span>
            </div>

            <div className='chat-message'>
              <span className='user'>John Mom</span>
              <p>I&apos;m doing well, thank you for asking.</p>
              <span className='time'>10:01 AM</span>
            </div>

            <div className='chat-message'>
              <span className='user'>John Doe</span>
              <p>I&apos;m also doing well, thank you for asking.</p>
              <span className='time'>10:01 AM</span>
            </div>
          </div>

          <div className="loader">
            <span className='user'>John Mom&apos;s typing</span>
            <div className="box-load1"></div>
            <div className="box-load2"></div>
            <div className="box-load3"></div>
          </div>
        </div>
      </main>
      <footer>
        <input
          className='message-input'
          type='text' 
          placeholder='Enter message here' />
        <button className='send-message'>
          <span>Send </span>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </footer>
    </>
  )
}

export default App
