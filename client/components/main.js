import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Head from './head'
import Header from './header'
import Card from './details/card'
import { getData } from '../redux/reducers/data'

const Main = () => {
  const listOfData = useSelector((store) => store.data.listOfData.slice(0, 12))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
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
    <div>
      <Head title="Hello" />
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

export default Main
