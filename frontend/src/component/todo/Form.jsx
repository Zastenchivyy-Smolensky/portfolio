import React from 'react'
import {useHistory} from "react-router-dom"

function Form(props) {
    const history = useHistory()
    const {handleChange, handleSubmit, value, buttonType} = props
  return (
    <div>
        <form>
            <div>
                <label htmlFor="title">アプリの名前</label><br />
                <input type="text" placeholder="アプリの名前を書く" name='title' id='title' onChange={(e) => handleChange(e)} value={value.title || ""} />
            </div>

            <div>
                <label htmlFor="image">画像</label><br />
                <input type="file" name='image' id='image' onChange={(e) => handleChange(e)} value={value.image || ""} />
            </div>

            <div>
                <label htmlFor="day">制作期間</label><br />
                <input type="number" name='day' id='day' onChange={(e) => handleChange(e)} value={value.day || ""} />
            </div>

            <div>
                <label htmlFor="thoughts">概要</label><br />
                <input type="text" name='thoughts' id='thoughts' onChange={(e) => handleChange(e)} value={value.thoughts || ""} />
            </div>

            <div>
                <label htmlFor="reason">アプリを作った理由</label><br />
                <input type="text" name='reason' id='reason' onChange={(e) => handleChange(e)} value={value.reason || ""} />
            </div>

            <div>
                <label htmlFor="tech">技術</label><br />
                <input type="text" name='tech' id='tech' onChange={(e) => handleChange(e)} value={value.tech || ""} />
            </div>

            <div>
                <label htmlFor="link">リンク</label><br />
                <input type="text" name='link' id='link' onChange={(e) => handleChange(e)} value={value.link || ""} />
            </div>

            <div>
                <label htmlFor="github">githubのURL</label><br />
                <input type="text" name='github' id='github' onChange={(e) => handleChange(e)} value={value.github || "" } />
            </div>

            <div>
                <label htmlFor="loadmap">作った背景</label><br />
                <textarea name="loadmap" id="loadmap" cols="30" rows="10" onChange={(e) => handleChange(e)} value={value.loadmap || ""} />
            </div>

            <div>
                <label htmlFor="commitment">こだわり</label><br />
                <textarea name="commitment" id="commitment" cols="30" rows="10"
                onChange={(e) => handleChange(e)} value={value.commitment || ""}></textarea>
            </div>


            <div>
                <label htmlFor="title">使い方</label><br />
                <textarea name="how" id="how" cols="30" rows="10" onChange={(e) => handleChange(e)} value={value.how || ""} />
            </div>

            <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)} />
        </form>
        <button onClick={()=> history.push("/")}>戻る</button>
    </div>
  )
}

export default Form