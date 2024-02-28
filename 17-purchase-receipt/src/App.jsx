import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faOpencart } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { useState } from 'react'
import Barcode from './assets/barcode.png'

function App() {
  const [visibleDialog, setVisibleDialog] = useState(false)

  const handlePurchase = () => {
    setVisibleDialog(!visibleDialog)
  }

  return (
    <>
      <main>
        <h1>Cart</h1>
        <section>
          <div className='product'>
            <h3>Product 1</h3>
            <FontAwesomeIcon className='product-icon' icon={faCartShopping} />
            <span>$10</span>
          </div>
          <div className='product'>
            <h3>Product 2</h3>
            <FontAwesomeIcon className='product-icon' icon={faCartShopping} />
            <span>$20</span>
          </div>
          <div className='product'>
            <h3>Product 3</h3>
            <FontAwesomeIcon className='product-icon' icon={faCartShopping} />
            <span>$30</span>
          </div>
          <div className='product'>
            <h3>Product 4</h3>
            <FontAwesomeIcon className='product-icon' icon={faCartShopping} />
            <span>$40</span>
          </div>
        </section>

        <button onClick={handlePurchase} className='purchase'>Purchase</button>
      </main>

      <dialog className='purchase-receipt' id={`${!visibleDialog && 'hidden'}`}>
        <FontAwesomeIcon className='brand-logo' icon={faOpencart} />
        <h1>La Esquinita</h1>
        <span>Adress: Lorem Ipsum, 23-10</span>
        <span className='bottom-separator'>Phone: 123456789</span>

        <h3 className='bottom-separator'>Cash receipt</h3>

        <div className='products-list bottom-separator'>
          <table>
            <thead>
              <tr>
                <th id='product-table-title'>Product</th>
                <th>q</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>product 1</th>
                <td>1</td>
                <td>$10</td>
              </tr>
              <tr>
                <th>product 2</th>
                <td>1</td>
                <td>$20</td>
              </tr>
              <tr>
                <th>product 3</th>
                <td>1</td>
                <td>$30</td>
              </tr>
              <tr>
                <th>product 4</th>
                <td>1</td>  
                <td>$40</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='total-price bottom-separator'>
          <table>
            <caption>Including IVA*</caption>
            <tbody>
              <tr>
                <th id='total-title'>Total</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>cash</th>
                <td>$120</td>
              </tr>
              <tr>
                <th>change</th>
                <td>$20</td>
              </tr>
            </tbody>
          </table>
        </div>

      <img id='barcode' src={Barcode} alt='purchase barcode' />

      <h3 id='thanks-title'>Thank you!!!</h3>
      <span>We hope to see you soon</span>
      </dialog>
    </>
  )
}

export default App
