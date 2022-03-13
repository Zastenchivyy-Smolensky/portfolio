// List.jsx
import React, { useEffect, useState } from "react";
import { deletePost, getList } from "../lib/api/product";
import { useHistory, Link } from "react-router-dom";

const ProductList = () => {
  const history = useHistory();
  const [dataList, setDataList] = useState([]);

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
  const handleDelete = async (item) => {
    console.log("click", item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      history.push("/");
      handleGetList();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => history.push("/new")}>新規作成</button>
      <table>
        <thead>
          <tr>
            <th>アプリ名前</th>
            <th>理由</th>
            <th colSpan="1"></th>
            <th colSpan="1"></th>
            <th colSpan="1"></th>
          </tr>
        </thead>
        {dataList.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.title}</td>
              <td>{item.reason}</td>
              <td>
                <Link to={`/edit/${item.id}`}>更新</Link>
              </td>
              <td>
                <Link to={`/product/${item.id}`}>詳細へ</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item)}>削除</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default ProductList;
