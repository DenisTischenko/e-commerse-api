import React from 'react'
import { useSelector } from 'react-redux'

const OrderCount = () => {
  const { count, totalPrice } = useSelector((store) => store.basket)
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (totalPrice * rate).toFixed(2)
  return (
    <div className="OrderCount  grid grid-cols-2 text-xl text-white font-bold">
      <div className="total py-1">
        Total items: {actualCurrency} {currency}
      </div>
      <div className="count py-1 bg-gray-700 text-center rounded-md w-20">{count}</div>
    </div>
  )
}

OrderCount.propTypes = {}

export default React.memo(OrderCount)
