import './App.css'
import BarCode from './assets/barcode(1).gif'

function App() {
  return (
    <>
      <div>
        <header className='bg-sky-400 py-4 px-4 text-3xl uppercase font-bold text-gray-200 text-right box-border'>Boarding Pass</header>
        <main className='grid grid-cols-4 grid-rows-4 gap-x-2 h-56 text-lg bg-gray-200'>
          <div className='row-span-4 flex justify-center items-center'>
            <img className='object-fill' src={BarCode}></img>
          </div>
          <div className='col-span-3 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Name:</span>
            John Doe
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold'>From:</span>
            London
          </div>
          <div className='col-span-2 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>To:</span>
            New York
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Flight:</span>
            123
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Date:</span>
            12/12/2022
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Seat:</span>
            A1
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Terminal:</span>
            1
          </div>
          <div className='col-span-2 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Boarding Time:</span>
            12:00 PM
          </div>
        </main>
        <div className='h-3 w-full bg-sky-400'></div>
      </div>
      <aside className=' flex flex-col'>
        <div className='bg-sky-400 flex-1 h-14 py-4 px-4 text-xl uppercase font-bold text-gray-200 text-right'>Boarding Pass</div>
        <div className='grid grid-rows-5 grid-cols-3 gap-x-1 h-56 text-sm bg-gray-200 pl-2'>
          <div className='col-span-3 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Name:</span>
            John Doe
          </div>
          <div className='col-span-3 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>from:</span>
            London
          </div>
          <div className='col-span-3 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>to:</span>
            New York
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>date:</span>
            12/12/2022
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>time:</span>
            12:00 PM
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>flight:</span>
            123
          </div>
          <div className='flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>seat:</span>
            A1
          </div>
          <div className='col-span-2 flex items-center justify-start gap-2'>
            <span className='font-semibold uppercase'>Terminal:</span>
            1
          </div>
        </div>
        <div className='h-3 w-full bg-sky-400'></div>
      </aside>
    </>
  )
}

export default App
