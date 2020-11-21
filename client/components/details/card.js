import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../redux/reducers/basket'

const Card = (props) => {
  const { data } = props
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (data.price * rate).toFixed(2)
  const dispatch = useDispatch()

  return (
    <div className="cardmain grid bg-gray-300">
      <div className="card grid-rows-6 bg-gray-400 rounded-lg m-4 text-center p-4">
        <div className="card__image row-start-1 row-end-4 m-4 p-2">
          <img className="images w-full object-cover h-40" src={data.image} alt={data.title} />
        </div>
        <div className="title rounded-md text-gray-600 p-2 text-3xl">{data.title}</div>
        <div className="card_title_price grid grid-cols-2">
          <div className="price  text-2xl py-2 justify-self-end">{actualCurrency}</div>
          <div className="currency  text-2xl py-2 mx-2 justify-self-start">{currency}</div>
        </div>
        <div className="card__product-amount py-2 text-xl">card__product-amount</div>
        <button
          type="button"
          className="m-2 py-2 bg-gray-500 rounded-md w-32 text-white text-center transition duration-300 ease-in-out focus:outline-none hover:bg-gray-700"
          onClick={() => dispatch(addToBasket(data))}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default React.memo(Card)
