import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../header'
import { updateCount } from '../../redux/reducers/basket'

const Basket = () => {
  const dispatch = useDispatch()
  const cardItems = useSelector((store) => store.basket.basket)
  const { totalPrice, totalAmount } = useSelector((store) => store.basket)
  const currency = useSelector((it) => it.data.currency)
  const rate = useSelector((it) => it.data.rates[it.data.currency])
  const actualPrice = totalPrice * rate

  useEffect(() => {
    axios({
      method: 'post',
      url: '/api/v1/logs',
      data: {
        time: +new Date(),
        action: `navigate to ${window.location.pathname} page`
      }
    }).catch((err) => console.log(err))
    return () => {}
  }, [])

  return (
    <div className="basket_main grid">
      <Header />
      <div>
        <div className="Titles_card grid grid-cols-6  bg-gray-500 font-bold text-xl py-4 text-white text-center">
          <div className="# border-r-2 border-white">#</div>
          <div className="Title__image border-r-2 border-white">Image</div>
          <div className="Title__title border-r-2 border-white">Title</div>
          <div className="Title__price border-r-2 border-white">Price</div>
          <div className="Title__amount border-r-2 border-white">Amount</div>
          <div className="Title__amount">Total</div>
        </div>

        {cardItems.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="grid grid-cols-6 bg-gray-200 font-bold text-xl py-2 my-2 text-gray-700 text-center">
                <div className="# grid place-items-center">{index + 1}</div>

                <div className="Image ">
                  <img
                    className="product__image justify-self-center w-full object-cover h-40"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="Title grid place-items-center border-r-2 border-white">
                  <div className="product__title">{item.title}</div>
                </div>

                <div className="Price grid place-items-center border-r-2 border-white">
                  <div className="product__price">
                    {(item.price * rate).toFixed(2)} {currency}
                  </div>
                </div>

                <div className="Amount grid place-items-center border-r-2 border-white">
                  <div className="product__amount">
                    <button
                      type="button"
                      className="button__add font-bold text-2xl px-2 text-gray-700 focus:outline-none"
                      onClick={() => dispatch(updateCount(item, '-'))}
                    >
                      -
                    </button>
                    {typeof item === 'undefined' ? 0 : item.count}
                    <button
                      type="button"
                      className="button__take font-bold text-2xl px-2 text-gray-700 focus:outline-none"
                      onClick={() => dispatch(updateCount(item, '+'))}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="Total grid place-items-center ">
                  <div className="product__total_price">
                    {(item.price * item.count * rate).toFixed(2)} {currency}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <button type="button" className="product__remove">
          Remove
        </button>

        <div id="total-amount">total-amount: {totalAmount}</div>

        <div id="total-price">
          total-price: {actualPrice.toFixed(2)} {currency}
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default Basket
