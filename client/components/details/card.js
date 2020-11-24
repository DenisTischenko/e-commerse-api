import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../../redux/reducers/basket'

const Card = (props) => {
  const { data } = props
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (data.price * rate).toFixed(2)
  const dispatch = useDispatch()
  const count = useSelector((it) => it.basket.basket[data.id])
  const amount = typeof count === 'undefined' ? '' : count.count

  return (
    <div className="card_main grid bg-gray-300">
      <div className="card  bg-gray-400 rounded-lg m-4 text-center p-4">
        <img className="images w-full object-cover h-40" src={data.image} alt={data.title} />
        <div className="title  text-3xl p-4 rounded-md text-gray-600 ">{data.title}</div>

        <div className="card_title_price  grid grid-cols-2 p-4">
          <div className="price  text-2xl px-2 justify-self-end">{actualCurrency}</div>
          <div className="currency  text-2xl px-2 justify-self-start">{currency}</div>
        </div>

        <div className="button_add grid grid-cols-3">
          <button
            type="button"
            className="col-span-2 m-2 py-2 bg-gray-500 rounded-md w-32 justify-self-end text-white text-center transition duration-300 ease-in-out focus:outline-none hover:bg-gray-700"
            onClick={() => dispatch(addToBasket(data))}
          >
            Add
          </button>
          <div className="card__product-amount  grid place-items-center bg-gray-300 justify-self-end text-3xl text-gray-600 text-center font-bold border-2 border-solid border-gray-600 rounded-full w-16 h-16">
            {amount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)
