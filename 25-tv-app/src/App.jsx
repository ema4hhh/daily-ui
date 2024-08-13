import './App.css'

function App() {
  return (
    <>
      <aside className='absolute left-0 top-0 bottom-0 bg-slate-100 pt-4 pl-4 pr-10 flex flex-col gap-6'>
        <h1 className='font-bold text-3xl tracking-wider'>Menu</h1>
        <ul className='flex flex-col list-["🎬"] font-semibold gap-3 text-xl pl-4'>
          <li className='border-b border-slate-600 cursor-pointer'>HDMI 1</li>
          <li className='border-b border-slate-600 cursor-pointer'>HDMI 2</li>
          <li className='border-b border-slate-600 cursor-pointer'>AV</li>
          <li className='border-b border-slate-600 cursor-pointer'>USB</li>
          <li className='border-b border-slate-600 cursor-pointer'>CAST</li>
        </ul>
      </aside>

      <main>

      </main>

      <footer>
        <ul>
          <li><img /></li>
        </ul>
      </footer>
    </>
  )
}

export default App
