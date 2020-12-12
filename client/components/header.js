import React from 'react'
import { Link } from 'react-router-dom'
import Currency from './details/currency'
import Sort from './details/sort'
import OrderCount from './details/order-count'

const Header = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-600 py-8">
      <div
        id="BrandName"
        className="text-white text-center text-3xl font-bold transition duration-300 ease-in-out hover:text-gray-700"
      >
        <Link to="/">=Logogo=</Link>
      </div>
      <div className="Currency">
        <Currency />
      </div>
      <div className="Sort">
        <Sort />
      </div>
      <div className="OrderCount grid place-items-center text-center">
        <OrderCount />
      </div>
    </div>
  )
}

export default Header
