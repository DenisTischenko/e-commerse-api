import React from 'react'

const Basket = () => {
  return (
    <div className="basket">
      <div className="product__image"></div>
      <div className="product__title"></div>
      <div className="product__price"></div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
