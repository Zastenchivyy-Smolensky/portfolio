import React, { useCallback, useState } from "react";
import { createPost } from "../../lib/api/product";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Box } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: 320,
  },
  inputFileBtn: {
    marginTop: "10px",
  },
  submitBtn: {
    marginTop: "10px",
    marginLeft: "auto",
  },
  box: {
    margin: "2rem 0 4rem",
    width: 320,
  },
  preview: {
    width: "100%",
  },
}));
const Input = styled("input")({
  display: "none",
});
const borderStyles = {
  bgcolor: "background.paper",
  border: 1,
};
function ImageForm({ handleGetPosts }) {
  const classes = useStyle();

  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");

  const uploadImage = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);
  }, []);

  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
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
      <form noValidate onSubmit={handleCreatePost}>
        <div className={classes.inputFileBtn}>
          <label htmlFor="icon-button-file">
            画像
            <br />
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) => {
                uploadImage(e);
                previewImage(e);
              }}
            />
            <IconButton color="inherit" component="span">
              <PhotoCameraIcon />
            </IconButton>
          </label>
        </div>
      </form>
      {preview ? (
        <Box
          sx={{ ...borderStyles, borderRadius: 1, borderCololor: "gray.400" }}
          className={classes.box}
        >
          <IconButton color="inherit" onClick={() => setPreview("")}>
            <CancelIcon />
          </IconButton>
          <img src={preview} alt="preview img" className={classes.preview} />
        </Box>
      ) : null}
    </div>
  );
}

export default ImageForm;
