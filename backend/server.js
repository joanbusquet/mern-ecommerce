import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import { errorHandler, notFound } from './middlewares/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

// Environment variables
dotenv.config()

// MongoDB connect
connectDB()

const app = express()

// Body parser
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Error hander custom middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
)
