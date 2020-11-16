import React from 'react'
import Head from './head'

import Header from './header'
import Card from './comp/card'
import Currency from './comp/currency'
import Sort from './comp/sort'
import OrderCount from './comp/order-count'
import Basket from './comp/basket'

const Main = () => {
  return (
    <div>
      <Head />
      <Header />
      <Card />
      <Currency />
      <Sort />
      <OrderCount />
      <Basket />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
