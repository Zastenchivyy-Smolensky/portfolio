import client from "./client";
import {Product} from "../../interfaces/index"

export const getProducts = ()=>{
    return client.get("/products")
}

export const createProducts = (data: Product) =>{
    return client.post("/products",data)
}
export const EditProduct = (data: Product, id:number) =>{
    return  client.patch(`/products/${id}`)
}
export const deleteProduct = (id: number) => {
    return client.delete(`/product/${id}`)
}