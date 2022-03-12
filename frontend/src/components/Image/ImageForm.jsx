import React, { useCallback, useState } from "react";
import { createPost } from "../../lib/api/product";

import { experimentalStyled as styled } from "@material-ui/core/styles";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CancelIcon from "@material-ui/icons/Cancel";
function ImageForm({ handleGetPosts }) {
  const [image, setImage] = useState();
  const uploadImage = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);
  }, []);
  const createFormData = () => {
    const formData = new FormData();
    if (image) formData.append("image", image);
    return formData;
  };
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const data = createFormData();
    await createPost(data).then(() => {
      setImage(undefined);
      handleGetPosts();
    });
  };
  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <div>
          <label htmlFor="icon-button-image">
            <input
              type="file"
              accept="image/*"
              id="icon-button-file"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
            <IconButton color="inherit" component="span"></IconButton>
          </label>
        </div>
      </form>
    </div>
  );
}

export default ImageForm;
