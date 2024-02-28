import PropTypes from 'prop-types'

function Modal({ handleSubmit, errorMessage }) {
  return (
    <dialog>
        <div className='form-container'>

          <h3 id='add-card-title'>Add new card</h3>

          <form onSubmit={handleSubmit}>

              <input 
                autoComplete='off' 
                type='text' 
                name='name' 
                placeholder='John Doe'
              />

              <input 
                autoComplete='off' 
                type='text' 
                name='number'
                placeholder='0000 0000 0000 0000' 
              />

              <div className='input-container'>
                <input 
                  autoComplete='off' 
                  type='text' 
                  name='date'
                  placeholder='MM/AA'
                />
                <input 
                  autoComplete='off' 
                  id='cvv'
                  type='text'
                  name='cvv' 
                  placeholder='CVV' 
                />
              </div>

              <input 
                type='submit' 
                className='submit' 
              />

          </form>

          <p>{errorMessage}</p>

        </div>
      </dialog>
  )
}

Modal.propTypes = {
  handleSubmit: PropTypes.func,
  showDialog: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default Modal