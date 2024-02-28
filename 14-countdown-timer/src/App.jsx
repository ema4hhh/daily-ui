import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [progress, setProgress] = useState(360);
  const initialTime = useRef(0)

  useEffect(() => {
    let interval = null;
    
    if (pause) {
      return () => clearInterval(interval)
    }
    
    if(time > 0) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [time, pause])

  useEffect(() => {
    setProgress(Math.round((time / initialTime.current) * 360))

    if (time === 0) {
      setTimeout(() => setProgress(360), 500)
    }
  }, [time])

  const handleStart = (event) => {
    event.preventDefault()
    const timeInput = document.querySelector('.time-field')

    if(timeInput.value === '' || timeInput.value === 0) return alert('Time cannot be 0')
    
    initialTime.current = timeInput.value    
    setTime(timeInput.value)
    timeInput.value = ''
  }

  const handleReset = () => {
    setTime(0)
  }

  const handlePause = () => {
    setPause(!pause)
  }

  return (
    <>
      <main>
        <h1>Countdown App</h1>
        <div className='counter-container'>
          <div className='outer-circle'>

          <div className="progress-bar"><div className="circle" style={{
            background: `conic-gradient(
              from 0deg,
              #32004F ${progress}deg,
              transparent 0)`
          }}></div></div>

            <div className='inner-circle'>
              <div className="time">
                <span>{time}</span>
              </div>

              <div className="buttons">
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
              </div>
              <form onSubmit={handleStart}>
                <input className='time-field' type="number" min="0" max="60" />
                <input className='submit-btn' type='submit' value='Start' />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
