import React from 'react'

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">card__image</div>
      <div className="card__price">card__price</div>
      <div className="currency">currency</div>
      <div className="card__product-amount">card__product-amount</div>
      <div className="card__title">card__title</div>
      <button type="button">Add</button>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
