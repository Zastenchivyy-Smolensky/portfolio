import { deleteProduct } from '../lib/api/products'
import React from 'react'
import {Product} from "../interfaces/index"

interface ProductItemProps{
  product: Product
  setProducts: Function
}

export const ProductItem: React.FC<ProductItemProps> = ({product, setProducts})=>{
  const handleDeleteProduct = async(id: number)=>{
    try{
      const res = await deleteProduct(id)
      console.log(res);
      if (res?.status===200){
        setProducts((prev: Product[])=> prev.filter((product: Product)=> product.id != id))
      }else{
        console.log(res.data.message);
      }
    }catch(e){
      console.log(e);
      return(
        <tr>
          <th>{product.title}</th>
          <td>
            <button onClick={()=> handleDeleteProduct(product.id || 0)}>Delete</button>
          </td>
        </tr>
      )
    }
  }
}
