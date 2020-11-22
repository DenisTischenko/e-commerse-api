import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'

const Basket = () => {
  const cardItems = useSelector((store) => store.basket.basket)
  const { totalPrice } = useSelector((store) => store.basket)
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualCurrency = (totalPrice * rate).toFixed(2)

  return (
    <div className="basket_main">
      <Header />
      <div>
        {cardItems.map((item) => {
          return (
            <div key={item.id}>
              <img className="product__image" src={item.image} alt={item.title}/>
              <div className="product__title">{item.title}</div>
              <div className="product__price">{item.price} {currency}</div>
              <div className="product__amount">On the card: {item.count}</div>
              <div className="product__total_price">Total sum: {actualCurrency} {currency}</div>
            </div>
          )
        })}
      </div>
      <button type="button" className="product__remove">
        Remove
      </button>
      <div id="total-amount">total-amount</div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
