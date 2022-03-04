// List.jsx
import React, { useEffect, useState } from 'react';
import { getList } from '../lib/api/product';

const List = () => {
  const [dataList, setDataList] = useState({});

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <h1>HOME</h1>;
};
export default List;