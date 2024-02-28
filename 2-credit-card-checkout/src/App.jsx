import { useCallback, useState } from 'react'
import './App.css'
import CreditCard from './components/CreditCard'
import Modal from './components/Modal';

function checkValid ({ name, number, date, cvv }) {
  const VALIDATIONS = [
    {
      condition: name === '',
      message: 'Name should not be empty'
    },
    {
      condition: name[0] === ' ',
      message: 'Name should not start with a blank space'
    },
    {
      condition: number.length < 16,
      message: 'Number is shorter than expected'
    },
    {
      condition: !/^\d+$/.test(number),
      message: 'Field must only contain numbers'
    },
    {
      condition: date.length !== 4,
      message: 'Date length is different from 4'
    },
    {
      condition: !/^\d+$/.test(date),
      message: 'Date must have only numbers'
    },
    {
      condition: cvv.length < 3 || cvv.length > 4,
      message: 'CVV length must be 3 or 4'
    },
    {
      condition: !/^\d+$/.test(cvv),
      message: 'CVV must be only numbers'
    }
  ];

  for (const validation of VALIDATIONS) {
    if (validation.condition) {
      return validation.message;
    }
  }

  return ''
}

function App() {
  const [showDialog, setShowDialog] = useState(false)
  const [creditCards, setCreditCards] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    const name = e.target.name.value
    const number = e.target.number.value
    const date = e.target.date.value
    const cvv = e.target.cvv.value

    const newErrorMessage = checkValid({ name, number, date, cvv })

    
    if (!newErrorMessage) {

      const newCreditCard = [...creditCards]
      newCreditCard.push({
        name,
        number,
        date,
        cvv
      })
      
      setErrorMessage('')
      setCreditCards(newCreditCard)
      setShowDialog(false)

      return
    }
    
    return setErrorMessage(newErrorMessage)

  }, [creditCards])

  const handleClick = () => {
    setShowDialog(true)
  }

  return (
    <>

      <header>
        <h3>Checkout</h3>
        <p className='amount'>$300000</p>
      </header>

      <main className='cards'>

        <section className='save-cards'>

          <span>Saved Cards</span>

          <button onClick={handleClick}><span>+ Add New</span></button>

        </section>

      {
        creditCards.map(({ name, number, date, cvv }) => {
          return <CreditCard 
            name={name} 
            number={number} 
            date={date} 
            cvv={cvv} 
            key={cvv} />
        })
      }

      <CreditCard name='John Doe' number='0000 - 0000 - 0000 - 0000' date='7/24' />

      </main>

      <footer>
        <button className='proceed'><span>PROCEED</span></button>
      </footer>
      
      {showDialog 
        ? <Modal 
          handleSubmit={handleSubmit} 
          errorMessage={errorMessage} />
        : undefined
      }
      
    </>
  )
}

export default App
