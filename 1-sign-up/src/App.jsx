import { useEffect, useState } from 'react'
import './App.css'
import useValidateForm from './hooks/useValidateForm'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { nameError, emailError } = useValidateForm({ name, email })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [loading])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(nameError || emailError)) {
      setName('')
      setEmail('')
      setLoading(true)
    }
  }

  return (
    <>
      <main className='sign-up'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <h1>Sign Up!</h1>
          <label>
            <p>Name</p>
            <input 
              type='text' 
              name='name'
              placeholder='John Doe'
              onChange={handleNameChange}
              value={name}
            />
            <i>
              {nameError}
            </i>
          </label>

          <label>
            <p>Email</p>
            <input 
              type='email'
              name='email'
              placeholder='johndoe123@gmail.com'
              onChange={handleEmailChange}
              value={email}
            />
            <i>
              {emailError}
            </i>
          </label>
          
          <input 
            type='submit' 
            value='Submit' 
          />
        </form>

        <h3 className={+ loading ? 'loading' : 'loaded'}>Loading...</h3>
      </main>
    </>
  )
}

export default App
