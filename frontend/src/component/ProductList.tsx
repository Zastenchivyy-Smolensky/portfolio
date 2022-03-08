import { getProducts } from 'lib/api/products'
import React from 'react'
import {Product} from "../interfaces/index"
import { ProductItem } from './ProductItem'

interface ProductListProps{
    products: Product[]
    setProducts: Function
}

export const ProductList: React.FC<ProductListProps> = ({products, setProducts }) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Products</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product: Product, index: number )=>{
                        return(
                            <ProductItem
                            key={index}
                            product={product}
                            setProducts={setProducts}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

