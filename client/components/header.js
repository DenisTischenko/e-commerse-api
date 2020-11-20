import React from 'react'
import { Link } from 'react-router-dom'
import Currency from './comp/currency'
import OrderCount from './comp/order-count'
import Sort from './comp/sort'

const Header = () => {
  return (
    <div className="grid grid-cols-5 bg-gray-600 py-5">
      <div id="BrandName" className="text-white text-center pt-2 text-3xl font-bold hover:text-gray-700">
        <Link to="/"> Logogoo </Link>
      </div>
      <div className="Currency grid col-span-2">
        <Currency />
      </div>
      <div className="Sort  col-start-4">
        <Sort />
      </div>

      <div className="OrderCount  col-start-5 text-white text-center text-2xl font-normal">
        <OrderCount />
      </div>
    </div>
  )
}

export default Header
