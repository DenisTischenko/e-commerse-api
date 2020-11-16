import React from 'react'
import Head from './head'

import Header from './header'
import Card from './comp/card'
import Currency from './comp/currency'
import Sort from './comp/sort'
import OrderCount from './comp/order-count'

const Main = () => {
  return (
    <div>
      <Head />
      <Header />
      <Card />
      <Currency />
      <Sort />
      <OrderCount />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
