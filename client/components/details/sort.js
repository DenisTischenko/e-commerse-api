import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortBy } from '../../redux/reducers/data'
import { sorting } from '../../redux/reducers/basket'

const buttonsStyle =
  'mx-2 py-3 bg-gray-500 rounded-md w-32 text-white text-center align-middle focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700 '

const Sort = () => {
  const [toggled, setToggle] = useState(true)
  const dispatch = useDispatch()
  const onClick = (sortType) => {
    return () => {
    setToggle(!toggled)
    dispatch(sortBy(sortType, toggled))
    dispatch(sorting(sortType, toggled))
    }
  }
  return (
    <div className="sort grid grid-cols-2">
      <div className="button_sort-price justify-self-end">
        <div className={buttonsStyle}>
          <button
          id="price"
          type="button"
          onClick={onClick('price')}>
            Sort by price
          </button>
        </div>
      </div>
      <div className="button_sort-name">
        <div className={buttonsStyle}>
          <button
          id="name"
          type="button"
          onClick={onClick('by_name')}>
            Sort by name
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sort
