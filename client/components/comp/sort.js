import React from 'react'

const Sort = (props) => {
  const onClick = () => {
    props.card.sort()
  }

  return (
    <div className="sort">
      <div className="price">
        <button id="sort-price" type="button" onClick={onClick}>
          PRICE
        </button>
      </div>
      <div className="name">
        <button id="sort-name" type="button" onClick={onClick}>
          NAME
        </button>
      </div>
    </div>
  )
}

export default Sort
