import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { getLogs } from '../../redux/reducers/logs'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((store) => store.logs.listOfLogs)
  useEffect(() => {
    dispatch(getLogs())
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
      <div className="text-white text-center text-3xl font-bold transition duration-300 ease-in-out hover:text-gray-700">
        <div>Logs</div>
        <div>
          <div>Numbers of records:</div>
          <div>{logs.length}</div>
        </div>
      </div>
      {logs.map((logString) => {
        return (
          <div key={logString.time}>
            <div className="bg-gray-400">{Date(logString.time)}</div>
            <div className="bg-gray-200">{logString.action}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Logs
