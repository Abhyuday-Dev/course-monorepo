import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./addcourse.css"; 
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export const AddCourse = (props: {
  onClick: (title: string, description: string, imageLink: string, price: number, isPublished: boolean) => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [isPublished, setispublished] = useState("");

  const handleSubmit = async () => {
    await props.onClick(title, description, imageLink, price, isPublished);
    // Reset fields after submission
    setTitle("");
    setDescription("");
    setImageLink("");
    setPrice("");
    setispublished("");
  };

  return (
    <div className="main">
      <div className="wrapper">
        <div className="image"></div>
        <div className="form">
          <Typography fontSize="15px" fontWeight="700" marginBottom="15px">
            Add Course
          </Typography>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Title"
            variant="outlined"
            className="input"
            style={{marginBottom:"10px"}}
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            label="Description"
            variant="outlined"
            className="input"
            style={{marginBottom:"10px"}}
          />
          <TextField
            onChange={(e) => setImageLink(e.target.value)}
            value={imageLink}
            label="Cover Image"
            variant="outlined"
            className="input"
            style={{marginBottom:"10px"}}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            label="Price"
            variant="outlined"
            className="input"
            style={{marginBottom:"10px"}}
          />
            <FormControl variant="outlined" className="input">
            <InputLabel>Published</InputLabel>
            <Select
              value={isPublished}
              onChange={(e) => setispublished(e.target.value)}
              label="Published"
              style={{marginBottom:"10px"}}
            >
              <MenuItem value="true">True</MenuItem>
              <MenuItem value="false">False</MenuItem>
            </Select>
          </FormControl>
          <Button
            className="button"
            variant="contained"
            onClick={handleSubmit}
          >
            Add Course
          </Button>
        </div>
      </div>
    </div>
  );
};
