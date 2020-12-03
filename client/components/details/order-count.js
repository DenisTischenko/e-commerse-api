import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const OrderCount = () => {
  const { totalAmount, totalPrice } = useSelector((store) => store.basket)
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (totalPrice * rate).toFixed(2)



  return (
    <div className="OrderCount grid grid-cols-2 text-xl text-white font-bold ">
      <div className="total py-1 ">
        Total: {actualCurrency} {currency}
      </div>
      <div className="total_items_in_basket grid">
        <Link
          id="order-count"
          className="text-gray-300 mx-4 border-2 border-solid border-gray-500 rounded-full w-16 hover:text-white hover:border-white"
          to="/basket"
        >
          {totalAmount}
        </Link>
      </div>
    </div>
  )
}

export default OrderCount
