import React from 'react'
import { useSelector } from 'react-redux'

const Card = (props) => {
  const { data } = props
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (data.price * rate).toFixed(2)
  return (
    <div className="card grid-rows-6 bg-gray-400 rounded-lg m-4 text-center p-2">
      <div className="card__image row-start-1 row-end-4 bg-gray-400 m-4 p-2">
        <img className="images w-full object-cover h-40" src={data.image} alt={data.title} />
      </div>
      <div className="card__title rounded-md text-gray-600 text-2xl">{data.title}</div>
      <div className="card__price ">{actualCurrency}</div>
      <div className="currency  mx-2">{currency}</div>
      <div className="card__product-amount">card__product-amount</div>
      <button
        type="button"
        className="m-2 p-2 bg-gray-500 rounded-md w-40 text-white text-center focus:outline-none hover:bg-gray-700"
      >
        Add
      </button>
    </div>
  )
}

export default React.memo(Card)
