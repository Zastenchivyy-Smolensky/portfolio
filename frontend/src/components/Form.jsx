// Form.jsx
import React from 'react';

const Form = (props) => {
  const { handleChange, handleSubmit, value, buttonType } = props
  return (
    <>
      <form>
        <div>
          <label htmlFor="title">アプリの名前</label><br />
          <input type="text" name="title" id="title" onChange={(e) => handleChange(e)} value={value.title || ""}/>
        </div>

        <div>
          <label htmlFor="image">画像</label>
          <input type="file" name='image.url' id="image.url" onChange={(e)=> handleChange(e)} value={value.image || ""} />
        </div>

        <div>
          <label htmlFor="reason">理由</label><br />
          <input type="text" name="reason" id="reason" onChange={(e) => handleChange(e)} value={value.reason || ""}/>
        </div>

        <div>
          <label htmlFor="thoughts">感想</label><br />
          <input type="text" name='thoughts' id='thoughts' onChange={(e) => handleChange(e)} value={value.thoughts || ""} />
        </div>

        <div>
          <label htmlFor="tech">技術</label><br />
          <input type="text" name='tech' id='tech' onChange={(e) => handleChange(e)} value={value.tech || ""} />
        </div>

        <div>
          <label htmlFor="loadmap">ロードマップ</label><br />
          <input type="text" name='loadmap' id='loadmap' onChange={(e) => handleChange(e)} value={value.loadmap || ""} />
        </div>

        <div>
          <label htmlFor="day">期間</label><br />
          <input type="text" name='day' id='day' onChange={(e) => handleChange(e)} value={value.day || ""} />
        </div>

        <div>
          <label htmlFor="commitment">こだわり</label><br />
          <input type="text" name='commitment' id='commitment' onChange={(e) => handleChange(e)} value={value.commitment || ""} />
        </div>

        <div>
          <label htmlFor="link">リンク</label><br />
          <input type="text" name='link' id='link' onChange={(e) => handleChange(e)} value={value.link || ""} />
        </div>

        <div>
          <label htmlFor="github">GITHUBのURL</label><br />
          <input type="text" name='github' id='github' onChange={(e) => handleChange(e)} value={value.github || ""} />
        </div>

        <div>
          <label htmlFor="how">使い方</label><br />
          <input type="text" name='how' id='how' onChange={(e) => handleChange(e)} value={value.how || ""} />
        </div>

        <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)}/>
      </form>
    </>
  )
};
export default Form;