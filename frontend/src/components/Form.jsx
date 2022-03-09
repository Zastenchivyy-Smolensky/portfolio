// Form.jsx
import React from 'react';

const Form = (props) => {
  const { handleChange, handleSubmit, value, buttonType } = props
  return (
    <>
      <form>
        <div>
          <label htmlFor="title">アプリの名前</label>
          <input type="text" name="title" id="title" onChange={(e) => handleChange(e)} value={value.title || ""}/>
        </div>
        <div>
          <label htmlFor="reason">理由</label>
          <input type="text" name="reason" id="reason" onChange={(e) => handleChange(e)} value={value.reason || ""}/>
        </div>
        <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)}/>
      </form>
    </>
  )
};
export default Form;