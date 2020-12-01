import axios from 'axios'

import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'
// import data from '../client/redux/reducers/data'

const { readFile, writeFile } = require ('fs').promises

const Root = () => ''

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/data', async(req, res) => {
  const readData = await readFile(`${__dirname}/data/data.json`, { encoding: 'utf8' })
    .then((it) => JSON.parse(it))
    .catch(() => ({ data: 'Sorry, not available' }))
    res.json(readData)
})

server.get('/api/v1/rates', async (req, res) => {
  const rates = await axios('https://api.exchangeratesapi.io/latest?base=USD').then(
    ({ data }) => data.rates
  )
     res.json(rates)
})

server.get('/api/v1/logs', async (req, res) => {
  const logs = await readFile(`${__dirname}/data/logs.json`, { encoding: 'utf8' })
  res.json(logs)
})

server.post('/api/v1/logs', async (req, res) => {
  const logs = await readFile(`${__dirname}/data/logs.json`, 'Denis', { encoding: 'utf8' }).then(
    (data) => JSON.parse(data))
  await writeFile(`${__dirname}/data/logs.json`, JSON.stringify([req.body, ...logs, ]), { encoding: 'utf8' })
  res.json(req.body)
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
