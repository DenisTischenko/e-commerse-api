import React from 'react'

const Currency = () => {
  return (
    <div className="currency justify-center text-center text-white font-normal">
      <button
        type="button"
        id="usd-button"
        className="px-3 py-2 bg-gray-500 rounded-md focus:outline-none hover:bg-gray-700"
      >
        USD
      </button>
      <button
        type="button"
        id="usd-button"
        className="mx-2 px-3 py-2 bg-gray-500 rounded-md focus:outline-none hover:bg-gray-700"
      >
        EUR
      </button>
      <button
        type="button"
        id="cad-button"
        className="px-3 py-2 bg-gray-500 rounded-md focus:outline-none hover:bg-gray-700"
      >
        CAD
      </button>
    </div>
  )
}

export default React.memo(Currency)
