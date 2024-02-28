import './App.css'
import HeaderImage from './assets/header-image.webp'
import GymImage1 from './assets/gym-image-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXTwitter, 
  faInstagram,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {

  const displayAccordion = () => {
    document.querySelector('.accordion-links').classList.toggle('show')
    
  }

  return (
    <>
      <nav>
        <a id='gym-logo'>GYM COMPANY</a>
        <div onClick={displayAccordion} className='accordion'>
          <a className='icon' role='button'>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <ul className='accordion-links'>
            <li>Home</li>
            <li>Menu</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='links'>
          <a>Home</a>
          <a>Menu</a>
          <a>Info</a>
          <a>Contact</a>
        </div>
      </nav>
      <header>
        <div className='intro-container'>
          <hgroup>
            <h2>Get you perfect shape</h2>
            <h1>Become stronger</h1>
          </hgroup>

          {/* cSpell: disable */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas! Qui aspernatur nesciunt rerum placeat voluptas pariatur debitis similique! Autem fugiat fugit accusamus totam animi ipsam hic officia itaque dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ratione quod laboriosam nihil iusto perferendis ab, corporis eaque, necessitatibus modi optio similique voluptatem temporibus facilis? Labore incidunt aspernatur quod sit!</p>
          {/* cSpell:enable */}

          <button>Learn More</button>
        </div>

        <img 
          src={HeaderImage} 
          alt='posing bodybuilder with dumbbell'
          className='intro-image' />

        <aside className='icons-container'>
          <a className='fa fa-twitter'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className='fa fa-instagram'>
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='fa fa-facebook'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className='fa fa-linkedin'>
            <FontAwesomeIcon fill='currentColor' icon={faLinkedinIn} />
          </a>
        </aside>
      </header>


      <main>
        <section>
          <article>
            <img src={GymImage1} />
            <div>  
              <h4>Coaching</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error sint repellat numquam illum</p>
              <button>Get coaching</button>
            </div>
          </article>
          <article>
            <img src={GymImage1} />
            <div>  
              <h4>Diet plans</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error sint repellat numquam illum</p>
              <button>Diet plans</button>
            </div>
          </article>
          <article>
            <img src={GymImage1} />
            <div>  
              <h4>Recomended gyms</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error sint repellat numquam illum</p>
              <button>Recomended gyms</button>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
