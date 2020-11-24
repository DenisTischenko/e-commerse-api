import React from 'react'

const buttonsStyle =
  'mx-2 py-3 bg-gray-500 rounded-md w-32 text-white text-center  align-middle  focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700 '

const Sort = (props) => {
  const onClick = () => {
    props.card.sort()
  }

  return (
    <div className="sort grid grid-cols-2">
      <div className="button_left justify-self-end">
        <div className={buttonsStyle}>
          <button id="sort-price" type="button" onClick={onClick}>
            Sort by price
          </button>
        </div>
      </div>
      <div className="button_right">
        <div className={buttonsStyle}>
          <button id="sort-name" type="button" onClick={onClick}>
            Sort by name
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sort
