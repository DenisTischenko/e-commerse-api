import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../../redux/reducers/data'

const buttonsStyle =
  'mx-2 py-3 bg-gray-500 rounded-md w-32 text-white text-center align-middle focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyClick = (currency) => dispatch(setCurrency(currency))

  return (
    <div className="currency text-center text-white font-normal">
      <button
        type="button"
        id="usd-button"
        className={buttonsStyle}
        onClick={() => currencyClick('USD')}
      >
        USD
      </button>
      <button
        type="button"
        id="eur-button"
        className={buttonsStyle}
        onClick={() => currencyClick('EUR')}
      >
        EUR
      </button>
      <button
        type="button"
        id="cad-button"
        className={buttonsStyle}
        onClick={() => currencyClick('CAD')}
      >
        CAD
      </button>
    </div>
  )
}

export default Currency
