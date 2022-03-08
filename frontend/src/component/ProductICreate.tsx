import { getProducts } from 'lib/api/products'
import { async } from 'q'
import React, { useCallback, useState } from 'react'
import {Product} from "../interfaces/index"
interface ProductFormProps {
    products: Product[]
    setProducts: Function
}

function ProductICreate() {
    const [image, setImage] = useState<File>()
    
  return (
      <div>
          <label htmlFor="title">title</label>
      </div>
  )
}

export default ProductICreate