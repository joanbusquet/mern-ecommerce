import dotenv from 'dotenv'

import products from './mocks/products.js'
import users from './mocks/users.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // Clean all orders, products and user from the db
    await deleteData(true)

    // Create all users from mock data
    const createdUsers = await User.insertMany(users)

    // Get id from admin user to create products with the relation with this user
    const adminUser = createdUsers[0]._id

    // Loop all mock products with all the fields and the relation user to the admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    // Create all products with user related
    await Product.insertMany(sampleProducts)

    console.log('Data Imported successfully')
    process.exit(1)
  } catch (error) {
    console.error(`Error: ${error}`)
    process.exit(1)
  }
}

const deleteData = async (followUp) => {
  try {
    // Clean all orders, products and user from the db
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Deleted successfully')
    !followUp && process.exit(1)
  } catch (error) {
    console.error(`Error: ${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  deleteData()
} else {
  importData()
}
