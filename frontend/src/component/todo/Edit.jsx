import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetail, updatePost } from '../../lib/api/product'
import {useHistory} from "react-router-dom"
import FormBody from "./Form"

function Edit() {
    const [value, setValue] = useState({
        title:"",
        image:"",
        day:"",
        thoughts:"",
        reason:"",
        tech:"",
        link:"",
        github:"",
        loadmap:"",
        commitment:"",
        how:"",
    })
    const query = useParams()

    const history = useHistory()

    useEffect(() => {
        handleGetData(query)
    },[query])

    const handleGetData = async(query) => {
        try{
            const res = await getDetail(query.id)
            console.log(res.data)
            setValue({
                title: res.data.title,
                image: res.data.image,
                day: res.data.day,
                thoughts: res.data.thoughts,
                reason: res.data.reason,
                tech: res.data.tech,
                link: res.data.link,
                github: res.data.github,
                loadmap: res.data.loadmap,
                commitment: res.data.commitment,
                how: res.data.how,
            })
        }catch(e) {
            console.log(e)
        }
    }
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await updatePost(query.id, value)
            console.log(res)
            history.push("/")
        }catch(e){
            console.log(e)
        }
    } 
  return (
    <div>
        <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="更新"
        />

    </div>
  )
}


export default Edit