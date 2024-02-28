import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faBackwardStep,
  faForwardStep,
  faThumbsUp,
  faThumbsDown,
  faEllipsisVertical,
  faVolumeHigh,
  faRepeat,
  faShuffle,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import Song from './components/Song'

export const SONG_COVER_URL = 'https://currentsofficial.com/cdn/shop/files/TDWS_Album_Cover_copy.jpg?v=1674669903&amp'

function App() {
  return (
    <> 
      <main className='songs'>
        <h1>Hello World!</h1>
        <ul>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </ul>
      </main>

      <footer className='player-bar'>
        <div className='progress-bar'></div>

        <div className='control left-controls'>
          <button><FontAwesomeIcon icon={faBackwardStep} /></button>
          <button><FontAwesomeIcon icon={faPlay} /></button>
          <button><FontAwesomeIcon icon={faForwardStep} /></button>          
          <span className='time'>1:24 / 2:31</span>
        </div>

        <div className='control middle-controls'>
          <img className='song-cover' src={SONG_COVER_URL} alt='song cover' />
          <div>
            <p className='song-title'>My Curse</p>
            <p className='song-info'>Killswitch Engage • As Daylight Dies (Special Edition) • 2006</p>
          </div>
          <div className='buttons-container'>
            <button><FontAwesomeIcon icon={faThumbsUp} /></button>
            <button><FontAwesomeIcon icon={faThumbsDown} /></button>
            <button><FontAwesomeIcon icon={faEllipsisVertical} /></button>
          </div>
        </div>

        <div className='control right-controls'>
          <button><FontAwesomeIcon icon={faVolumeHigh} /></button>
          <button><FontAwesomeIcon icon={faRepeat} /></button>
          <button><FontAwesomeIcon icon={faShuffle} /></button>
          <button><FontAwesomeIcon icon={faCaretDown} /></button>
        </div>
      </footer>
    </>
  )
}

export default App
