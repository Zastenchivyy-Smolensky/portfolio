import { createProducts } from 'lib/api/products'
import React, { useState } from 'react'
import {Product} from "../interfaces/index"
interface ProductFormProps{
    products: Product[]
    setProducts: Function
}
export const ProductForm: React.FC<ProductFormProps> = ({products,setProducts })=>{
    const [title, setTitle] = useState<string>("")
    const [image, SetImage] = useState<File>()
    const [reason, setReason] = useState<string>("")
    const [thoughts, setThoughts] = useState<string>("")
    const [tech, setTech] = useState<string>("")
    const [day, setday] = useState<number>(0)
    const [loadmap, setLoadmap] = useState<string>("")
    const [commitment, setCommitment] = useState<string>("")
    const [link, SetLink] = useState<string>("")
    const [github, setGithub] = useState<string>("")
    const [how, setHow] = useState<string>("")

    const handleCreateProduct = async(e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        const data: Product = {
            title: title,
            reason: reason,
            thoughts: thoughts,
            tech: tech,
            loadmap:loadmap,
            day:day,
            commitment:commitment,
            link:link,
            github:github,
            how:how
        }

        try{
            const res = await createProducts(data)
            console.log(res);
            if (res.status=200){
                setProducts([...products, res.data.product])
            }else{
                console.log(res.data.message);

            }            
        }catch(e){
            console.log(e);
            
        }
        setTitle("")
    }

    return(
        <form onSubmit={handleCreateProduct}>
            <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setTitle("")
            }} />
            <input type="submit" value="投稿" disabled={!title} />
        </form>
    )
}
    
        

