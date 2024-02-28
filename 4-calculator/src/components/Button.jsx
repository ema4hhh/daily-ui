import PropTypes from 'prop-types'

function Button({ symbol, isNumber, handleClick }) {
  return (
    <button className={isNumber 
      ? 'button-number' 
      : 'button-symbol'}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  )
}

Button.propTypes = {
  symbol: PropTypes.string,
  isNumber: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Button