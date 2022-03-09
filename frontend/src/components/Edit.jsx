// Edit.jsx
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updatePost, getDetail } from '../lib/api/product';
import FormBody from './Form';

const Edit = () => {
  // apiで取得したデータを管理する為のstate
  const [value, setValue] = useState({
    title: '',
    reason: '',
  })
  // 一覧からreact-router-domを使ってidを取得
  const query = useParams();

  const history = useHistory();
  // 画面が描画された時、queryが更新された時に関数を実行
  useEffect(() => {
    handleGetData(query)
  },[query])
  // idをapiクライアントに渡し、/api/v1/posts/:idのエンドポイントからデータ取得
  const handleGetData = async (query) => {
    try {
      const res = await getDetail(query.id)
      console.log(res.data)
      // 使う値のみstateにセットする
      setValue({
        title: res.data.title,
        reason: res.data.reason,
      })
    } catch (e) {
      console.log(e)
    }
  }
  // テキストフィールドの変更を検知し値を書き換えstateで管理
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.title]: e.target.value
    })
  }
  // 更新ボタン押下後、idとparameterをapiクライアントに渡しリクエストを投げる
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await updatePost(query.id, value)
      console.log(res)
      // リクエストが成功したら'/'にリダイレクトさせる
      history.push('/')
    } catch(e) {
      console.log(e)
    }
  }

  return(
    <>
      <h1>Edit</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType='更新'
      />
    </>
  )
}
export default Edit