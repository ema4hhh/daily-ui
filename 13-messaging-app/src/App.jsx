import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faComments } from '@fortawesome/free-regular-svg-icons'



function App() {
  return (
    <>
      <main className='container mx-auto pl-4 pr-2 pt-2 flex flex-col box-border min-h-full'>
        <h1 className='font-semibold text-center flex-none'>
          Chat App
          <FontAwesomeIcon className='ml-3' icon={faComments} />
        </h1>

        <div className='container mt-5 grow'>
          <div className='container flex flex-col gap-2'>
            <div className='relative pt-1 pb-5 pr-2 pl-1 lg:pl-0'>
              <p className='align-top text-sm font-bold inline-block lg:block'>John Doe</p>
              <p className='pl-2 inline lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa nemo natus nulla id! Maiores repudiandae fugiat optio aperiam enim culpa quia minus, nobis voluptatibus nisi facilis laborum sapiente? Ducimus.</p>
              <span className='absolute right-1 bottom-1 text-xs bg-transparent'>10:00 AM</span>
            </div>

            <div className='relative pt-1 pb-5 pr-2 pl-1 lg:pl-0'>
              <p className='align-top text-sm font-bold inline-block lg:block'>John Mom</p>
              <p className='pl-2 inline lg:block'>I&apos;m doing well, thank you for asking.</p>
              <span className='absolute right-1 bottom-1 text-xs bg-transparent'>10:01 AM</span>
            </div>

            <div className='relative pt-1 pb-5 pr-2 pl-1 lg:pl-0'>
              <p className='align-top text-sm font-bold inline-block lg:block'>John Doe</p>
              <p className='pl-2 inline lg:block'>I&apos;m also doing well, thank you for asking.</p>
              <span className='absolute right-1 bottom-1 text-xs bg-transparent'>10:01 AM</span>
            </div>
          </div>

          <div className="flex mt-4 transition duration-1000 loader">
            <span className='font-semibold text-sm mr-1'>John Mom&apos;s typing</span>
            <div className="box-load1"></div>
            <div className="box-load2"></div>
            <div className="box-load3"></div>
          </div>
        </div>
      </main>
      <footer className='fixed w-full box-border py-2 px-3 bottom-0 flex'>
        <input
          className='flex-1 p-3 rounded-l-lg border border-light-pink border-r-0 focus:outline-none'
          type='text' 
          placeholder='Enter message here' />
        <button className='font-bold rounded-r-lg border border-light-pink border-l-0 p-3'>
          <span>Send </span>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </footer>
    </>
  )
}

export default App
