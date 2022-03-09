import React, { useEffect, useState } from 'react';
import { getDetail, getList } from '../lib/api/product';
import { useHistory, useParams } from 'react-router-dom';

const DetailProduct = (props) => {
  const [data, setData] = useState({});
  const query = useParams();
  const history = useHistory();


  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  
 
  return (
    <>
      <h1>DETAIL</h1>
      <div>ID:{data.id}</div>
      <div>アプリの名前:{data.title }</div>
      <div>理由:{data.reason }</div>
      <div>感想:{data.thoughts}</div>
      <div>技術{data.tech}</div>
      <div>期間{data.day}</div>
      <div>こだわり{data.commitment}</div>
      <div>リンク{data.link}</div>
      <div>GitHubのリンク{data.github}</div>
      <div>使い方{data.how}</div>
      <button onClick={() => history.push('/')}>戻る</button>
    </>
  );
};
export default DetailProduct;