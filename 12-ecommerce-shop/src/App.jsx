import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux, faReact, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faLocationDot, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Product from './components/Product'

function App() {
  return (
    <>
      <header>

        <div className='nav-logo'>
          <FontAwesomeIcon icon={faLinux} />
          Linux shop
        </div>

        <div className='nav-search'>
          <form>
            <input placeholder='Buscar productos, marcas y más...' />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div className='nav-prom'>
          <span>Sponsors:</span>
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGithub} />
        </div>

        <div className='nav-addr'>
          <FontAwesomeIcon id='addr-icon' icon={faLocationDot} />
          <span id='addr-type-in'>Ingresa tu</span>
          <span id='addr-location'>ubicación</span>
        </div>

        <div className='nav-tools'>
          <ul className='nav-list'>
            <li>
              <a>Categorías</a>
            </li>
            <li>
              <a>Ofertas</a>
            </li>
            <li>
              <a>Historial</a>
            </li>
            <li>
              <a>Supermercado</a>
            </li>
            <li>
              <a>Moda</a>
            </li>
            <li>
              <a>Vender</a>
            </li>
            <li>
              <a>Ayuda / PQR</a>
            </li>
          </ul>
        </div>

        <div className='nav-account'>
          <ul className='nav-list'>
            <li>
              <a>Crea tu cuenta</a>
            </li>
            <li>
              <a>ingresa</a>
            </li>
            <li>
              <a>Mis compras</a>
            </li>
          </ul>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        
      </header>
      
      <main>
        <div className='carousel'>
          <div>
            <img className='carousel-img' src='https://http2.mlstatic.com/D_NQ_740569-MLA74541516857_022024-OO.webp' alt='carousel image'/>
            <div className='gradient'></div>
          </div>
        </div>
        <section className='products'>
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </>
  )
}

export default App
