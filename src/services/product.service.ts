import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import ProductType from '../types/product.types'
// import { ProductType } from '../controllers/product.controller' // Corrected import

export const addProductToDB = async (payload: ProductType) => {
  return await productModel.create(payload)
}

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((error) => {
      logger.info('Cannot get data from DB')
      logger.error(error)
      return undefined // Explicitly return undefined if an error occurs
    })
}

export const getProductById = async (id: string) => {
  return await productModel.findOne({ product_id: id })
}

export const updateProductById = async (id: string, payload: ProductType) => {
  return await productModel.findOneAndUpdate(
    {
      product_id: id
    },
    { $set: payload }
  )
}

export const deleteProductById = async (id: string) => {
  const result = await productModel.findOneAndDelete({ product_id: id })
  return result
}
