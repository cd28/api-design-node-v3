import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/data', (req, res) => {
  res.send({
    message: 'hello'
  })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server on port 3000')
  })
}
