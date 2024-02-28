import { useEffect, useState } from "react"

const useValidateForm = ({ name, email }) => {
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    if (name === '') {
      setNameError('')
    } else if (name[0] === ' ') {
      setNameError('Name should not start with blank space')
    } else if (!/^\p{Lu}/u.test(name)) {
      setNameError('Name should start with Upper Case')
    } else setNameError('')
  }, [name])

  useEffect(() => {
    if (email === '') {
      setEmailError('')
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Email is not valid')
    } else setEmailError('')
  }, [email])
  
  return { nameError, emailError }
}

export default useValidateForm