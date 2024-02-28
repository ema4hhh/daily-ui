import { useState } from 'react'
import './App.css'
import Button from './components/Button'

const BUTTONS = [
  {delete: 'C'},
  {parenthesis: '()'},
  {percentage: '%'},
  {division: '÷'},
  {7: '7'},
  {8: '8'},
  {9: '9'},
  {multiply: '*'},
  {4: '4'},
  {5: '5'},
  {6: '6'},
  {minus: '-'},
  {1: '1'},
  {2: '2'},
  {3: '3'},
  {plus: '+'},
  {sign: '±'},
  {0: '0'},
  {float: '.'},
  {equal: '='}
]

const URL = 'http://api.mathjs.org/v4/?expr=';

function App() {
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const requestOperation = async () => {
    
    try {
      const response = await fetch(`${URL} + ${encodeURIComponent(operation)}`)
      const json = await response.json();
  
      
      setResult(json)
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  }

  const handleClick = (symbol) => {
    setOperation(operation+symbol)
  } 

  return (
    <>
      <header>
        <h1>Javascript Calculator</h1>
      </header>
      <main>
        <section className='operations'>
          <input type='text' value={operation} readOnly />
          <input className='result' type='text' value={result} readOnly />
          <button onClick={() => requestOperation()} className='backspace' >Send</button>
        </section>

        <hr />

        <section className='buttons'>
          {
            BUTTONS.map(button => {
              const key = Object.keys(button)
              const symbol = button[key]
              const isNumber = !isNaN(symbol)

              return (
                <Button 
                  key={key} 
                  symbol={symbol}
                  isNumber={isNumber}
                  handleClick={handleClick} />
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
