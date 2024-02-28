import './App.css'
import ReactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <main>
        <h1>Some Content That You Cannot Access</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ad veniam vel neque, earum consectetur vero ut quidem commodi praesentium soluta eius numquam vitae corporis, culpa modi omnis dignissimos obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro, at tenetur amet totam in. Nulla porro impedit voluptatum ipsa ducimus facilis autem aliquam, odit consequuntur explicabo quod commodi. Ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt animi debitis, aperiam commodi culpa molestiae molestias voluptate quisquam labore consequuntur eius iste facere, numquam ipsum architecto illo. Sit, deleniti? Id?</p>
      </main>

      <dialog open>
        <div>
          <button className='close'>
            <span>X</span>
          </button>
          <h3>Sorry, you cannot access this content</h3>
          <span>Consider buying premium!</span>
          <img src={ReactLogo} alt="React Logo" />
          <button>Buy Premium</button>
        </div>
      </dialog>
    </>
  )
}

export default App
