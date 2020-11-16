import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="grid grid-cols-5 bg-gray-600">
      <div id="BrandName" className="text-white text-center font-bold p-10 hover:text-red-400">
        <Link to="/"> Logogoo </Link>
      </div>
    </div>
  )
}

export default Header
