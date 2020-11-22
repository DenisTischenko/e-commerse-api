import React from 'react'
import { Link } from 'react-router-dom'
import Currency from './details/currency'
import Sort from './details/sort'
import OrderCount from './details/order-count'

const Header = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-600 p-5">
      <div
        id="BrandName"
        className="text-white text-center align-middle text-3xl font-bold transition duration-300 ease-in-out hover:text-gray-700"
      >
        <Link to="/"> =Logogo=</Link>
      </div>
      <div className="Currency">
        <Currency />
      </div>
      <div className="Sort">
        <Sort />
      </div>
      <div className="OrderCount text-center">
        <OrderCount />
      </div>
    </div>
  )
}

export default Header
