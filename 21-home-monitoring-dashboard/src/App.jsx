import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faBoltLightning, faDroplet, faLightbulb, faWifi } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <header>
        <h2><FontAwesomeIcon icon={faWifi} />Home WiFi</h2>
        <h1>Colombia home dashboard</h1>
        <h2>mon,feb 26,2024</h2>
      </header>
      <main>
        <section className='temperature-section'>
          <h2>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
            &ensp;
            Temperature
          </h2>
          <h1>
            26°
          </h1>
        </section>
        <section>
          <h2>
            <FontAwesomeIcon icon={faBoltLightning} />
            &ensp;
            Electricity
          </h2>
          <h1>
            843<sup>kW</sup>
          </h1>
        </section>
        <section>
          <h2>
            <FontAwesomeIcon icon={faDroplet} />
            &ensp;
            Water
          </h2>
          <h1>
            4.3<sup>m<sup>3</sup></sup>
          </h1>
        </section>
        <section className='light-section'>
          <h2>
            <FontAwesomeIcon icon={faLightbulb} />
            &ensp;
            Light
          </h2>
          <ul>
            <li>
              <span>Hall</span> 
                <label className='switch'>
                  <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </li>
            <li>
              <span>living room</span> 
                <label className='switch'>
                  <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </li>
            <li>
              <span>kitchen</span> 
                <label className='switch'>
                  <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
