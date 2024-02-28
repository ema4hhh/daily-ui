import './App.css'

function App() {
  return (
    <>
      <main className='px-10 py-2 lg:max-w-xl'>
        <h1 className='capitalize text-3xl font-semibold mb-4 text-slate-900 text-center'>New employee IT request</h1>

        <section className='capitalize mx-auto py-3 grid grid-cols-2 gap-x-5 gap-y-3'>
          <div className='flex flex-col gap-2 group relative w-full'>
            <span className='text-slate-600'>First name</span>
            <input 
              type='text' 
              placeholder='John' 
              className='peer capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            />
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 peer-focus:w-full'></span>
          </div>

          <div className='flex flex-col gap-2 group relative w-full'>
            <span className='text-slate-600'>last name</span>
            <input 
              type='text' 
              placeholder='Martinez' 
              className='peer capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            />
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 peer-focus:w-full'></span>
          </div>

          <div className='flex flex-col gap-2 group relative w-full'>
            <span className='text-slate-600'>department</span>
            <select 
              className='capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            >
              <option value='Information technology'>IT</option>
              <option value='Human resource'>HR</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 group relative w-full'>
            <span className='text-slate-600'>manager</span>
            <select 
              className='capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            >
              <option value='Mommy'>Mommy</option>
              <option value='Daddy'>Daddy</option>
            </select>
          </div>

          <div className='flex flex-col gap-2 group relative w-full col-span-2'>
            <span className='text-slate-600'>Job title</span>
            <input 
              type='text' 
              placeholder='Engineer' 
              className='peer capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            />
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 peer-focus:w-full'></span>
          </div>

          <div className='flex flex-col gap-2 group relative w-full col-span-2'>
            <span className='text-slate-600'>start date</span>
            <input 
              type='date' 
              className='peer capitalize placeholder:text-gray-600 border-b border-gray-500 px-2 py-1 focus:outline-none hover:bg-indigo-200'
            />
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 peer-focus:w-full'></span>
          </div>

          <div className='flex flex-col gap-2 group relative w-full col-span-2'>
            <span className='text-slate-900'>Please issue the following items for the employee above</span>
            <div className='grid grid-cols-4 gap-x-2'>
              <label>
                <input type='checkbox' />
                laptop
              </label>
              <label>
                <input type='checkbox' />
                laptop carrying case
              </label>
              <label>
                <input type='checkbox' />
                AC power cord
              </label>
              <label>
                <input type='checkbox' />
                phone
              </label>
              <label>
                <input type='checkbox' />
                docking station
              </label>
              <label>
                <input type='checkbox' />
                tablet
              </label>
              <label>
                <input type='checkbox' />
                bluetooth mouse
              </label>
              <label>
                <input type='checkbox' />
                keyboard
              </label>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
