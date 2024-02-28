import { SONG_COVER_URL } from "../App"

function Song() {
  return (
    <li>
      <img className='song-cover' src={SONG_COVER_URL} />
      <span className='song-title'>Remember Me</span>
      <span className='song-info'>Currents</span>
  </li>
  )
}

export default Song