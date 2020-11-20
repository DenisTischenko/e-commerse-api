import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import Card from './details/card'
import { getData } from '../redux/reducers/data'

const Main = () => {
  const listOfData = useSelector((store) => store.data.listOfData.slice(0, 12))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
    return () => {}
  }, [])

  return (
    <div>
      <Header />
      <div className="Cardplace  grid grid-cols-4">
        {listOfData.map((item) => {
          return (
            <div key={item.id}>
              <Card data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
