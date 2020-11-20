import React from 'react'

const OrderCount = () => {
  return (
    <div className="OrderCount grid w-auto h-8">
      <div className="total justify-self-center text-center text-2xl font-bold p-2">
        Total items in card: xxx
      </div>
    </div>
  )
}

OrderCount.propTypes = {}

export default React.memo(OrderCount)
