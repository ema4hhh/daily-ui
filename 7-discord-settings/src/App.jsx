import './App.css'

{/* cSpell: disable */}
function App() {
  return (
    <>
      <main>
        <div>
          <h1>My Account</h1>
          <div className='profile'>
            <div id='upper-banner'></div>
            <div id='user-container'>
              <div id='profile-pic-container'>
                <img id='profile-pic' src='https://cdn.discordapp.com/avatars/692487570487246889/f1a297749f4c11adfce8cd0def71a943.webp?size=80' alt='user profile picture' />
              </div>
              <div>
                <h3 id='username'>Zyzz</h3>
                <span>...</span>
              </div>
              <button>Edit User Profile</button>
            </div>
            <div className='info-container'>
              <div className='info'>
                <h3>display name</h3>
                <span>Zyzz</span>
                <button>Edit</button>
              </div>
              <div className='info'>
                <h3>username</h3>
                <span>zyzz._</span>
                <button>Edit</button>
              </div>
              <div className='info'>
                <h3>email</h3>
                <span>ema4hhh@gmail.com</span>
                <button>Edit</button>
              </div>
              <div className='info'>
                <h3>phone number</h3>
                <span>3164776583</span>
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default App
