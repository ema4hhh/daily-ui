import './App.css'

function App() {
  return (
    <>
      <main>
        <div id='upper-banner'></div>
        <div id='profile-pic-container'>
          <img id='profile-pic' src='https://cdn.discordapp.com/avatars/580103496800534528/4ec998c5f29a052362b4be1fda2a2abd.webp?size=80' alt='user profile picture' />
        </div>
        {/* cSpell: disable */}
        <div id='info-container'>
          <h3>Zyzz</h3>
          <h5>zyzz._</h5>
          <hr />
          <h4>About me</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem minima et facere similique consequatur, </p>
          <h4>Member since</h4>
          <p>Nov 29, 2018</p>
          <h4>Playing a game</h4>
          <p>Minecraft</p>
          <h4>No roles</h4>
          <h4>Note</h4>
          <input id='add-note' type='text' placeholder='Click to add note' />
          <input type='text' placeholder='Message @Zyzz' />
        </div>
      </main>
    </>
  )
}

export default App
