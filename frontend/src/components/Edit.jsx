import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editProducts, getDetail } from "../lib/api/products";
import Form from "./FormButton";

function Edit() {
  const [value, setValue] = useState({
    title: "",
    image: "",
  });
  const query = useParams();
  const history = useHistory();
  useEffect(() => {
    handleGetData(query);
  }, [query]);
  const handleGetData = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setValue({
        title: res.data.title,
        image: res.data.image.url,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await editProducts(query.id, value);
      console.log(res);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
        />
      </form>
    </div>
  );
}

export default Edit;
