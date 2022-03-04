import React, { useEffect, useState } from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { getDetail } from '../../lib/api/product'

function Detail(props) {
    const [data, setData] = useState({});
    const query = useParams();
    const history = useHistory();
    useEffect(()=>{
        handleGetDetail(query)
    },[query]);
    const handleGetDetail = async (query) => {
        try{
            const res = await getDetail(query.id);
            console.log(res.data);
            setData(res.data);
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div>
        <h1>詳細ページ</h1>
        <div>ID:{data.id}</div>
        <div>名前:{data.title}</div>
        <div>期間:{data.day}</div>
        <div>写真:
            <img src={data.image} alt="" />
        </div>
        
        <button onClick={()=> history.push("/")}>戻る</button>
    </div>
  )
}

export default Detail