import './App.css'
import { faker } from '@faker-js/faker'

function App() {
  return (
    <>
      <main>
        <h1>LeaderBoard</h1>
        <div>
          <table>
            <tbody>
              <tr className='winner'>
                <th scope='row'>1</th>
                <td className='user'>
                  <img 
                    className='avatar' 
                    src={faker.image.avatarLegacy()} 
                    alt='avatar' />
                  John Doe
                </td>
                <td className='score'><span>🏅</span>100</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td className='user'>
                  <img 
                    className='avatar' 
                    src={faker.image.avatarLegacy()} 
                    alt='avatar' />
                  Jane Doe
                </td>
                <td className='score'>90</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td className='user'>
                  <img 
                    className='avatar' 
                    src={faker.image.avatarLegacy()} 
                    alt='avatar' />
                  Bob Smith
                </td>
                <td className='score'>80</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td className='user'>
                  <img 
                    className='avatar' 
                    src={faker.image.avatarLegacy()} 
                    alt='avatar' />
                  Sarah Johnson
                </td>
                <td className='score'>70</td>
              </tr>
              <tr className='button-row'>
                <td colSpan={3}>
                  <button>Refresh</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
