import VisaLogo from '../assets/visa.svg'
import PropTypes from 'prop-types'

function CreditCard({ name, number, date }) {
  return (
    <article className='credit-card'>

      <img className='logo' src={VisaLogo} />

      <p>{number}</p>

      <div className='info'>
        <span>
          <small>NAME</small>
          <br />
          {name}
        </span>
        <span className='valid'>
          <small>VALID TILL</small>
          <br />
          {date}
        </span>
      </div>

    </article>
  )
}

CreditCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  date: PropTypes.string
}

export default CreditCard