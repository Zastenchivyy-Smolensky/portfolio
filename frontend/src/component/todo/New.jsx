import React, { useState } from 'react'
import { createPost } from '../../lib/api/product';
import { useHistory } from 'react-router-dom';
import FormBody from "./Form"
function New() {
    const [value, setValue] = useState({})
    const history = useHistory();

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await createPost(value)
            console.log(res)
            history.push('/')
        }catch(e){
            console.log(e)
        }
    }
  return (
    <div>
        <h1>新規投稿ページ</h1>
        <FormBody
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={value}
            buttonType="投稿"
        />
    </div>
  )
}

export default New