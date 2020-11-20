import React from 'react'

const Basket = () => {
  return (
    <div className="basket">
      <div className="product__image">image</div>
      <div className="product__title">title</div>
      <div className="product__price">price</div>
      <div className="product__amount">price</div>
      <div className="product__total_price">total_price</div>
      <button type="button" className="product__remove">
        Delete
      </button>
      <div id="total-amount">total-amount</div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
