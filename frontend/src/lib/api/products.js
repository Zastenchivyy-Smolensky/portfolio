import Cookies from "js-cookie";
import client from "./client";
export const getProducts = () => {
  return client.get("/products");
};

export const getDetail = (id) => {
  return client.get(`/products/${id}`);
};

export const createProducts = (params) => {
  return client.post("/products", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
export const editProducts = (id, params) => {
  return client.put(`/products/${id}`, params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
export const deleteProducts = (id) => {
  return client.delete(`products/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
