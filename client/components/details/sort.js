import React from 'react'

const buttonsStyle =
  'mx-2 px-3 py-2 bg-gray-500 rounded-md w-40 text-white text-center focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700 '

const Sort = (props) => {
  const onClick = () => {
    props.card.sort()
  }

  return (
    <div className="sort grid grid-cols-2 my-2">
      <div className="buttonsplace left justify-self-end">
        <div className={buttonsStyle}>
          <button id="sort-price" type="button" onClick={onClick}>
            sort by price
          </button>
        </div>
      </div>
      <div className="buttonsplace right justify-self-start">
        <div className={buttonsStyle}>
          <button id="sort-name" type="button" onClick={onClick}>
            sort by name
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sort
