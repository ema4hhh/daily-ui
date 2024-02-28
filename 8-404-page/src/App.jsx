import './App.css'
import NotFound from './assets/pngwing.com.png'

function App() {
  return (
    <>
      <main>
        <div className='text-container'>
          <h1 title='404' id='error-404'>
            404
          </h1>
          <h4>Wizard behind curtains?</h4>
        </div>
        <div className='image-container'>
          <img src={NotFound} alt='page not found PNG' />
        </div>

        <a href='/' id='go-home'>Go back home</a>
      </main>
    </>
  )
}

export default App
