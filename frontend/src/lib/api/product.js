// post.js
import client from "./client";

// 一覧
export const getList = () => {
  return client.get("/products");
};

// 詳細
export const getDetail = (id) => {
  return client.get(`/products/${id}`);
};

// 新規作成
export const createPost = (params) => {
  return client.post("/products", params);
};

// 更新
export const updatePost = (id, params) => {
  return client.patch(`/products/${id}`, params);
};

// 削除
export const deletePost = (id) => {
  return client.delete(`/products/${id}`);
};
