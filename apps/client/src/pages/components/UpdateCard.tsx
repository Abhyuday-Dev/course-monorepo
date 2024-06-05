import { Card, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { courseState } from "store";



function UpdateCard() {
  const [courseDetails, setCourse] = useRecoilState(courseState);
  const [title, setTitle] = useState(courseDetails.course?.title || "");
  const [description, setDescription] = useState(courseDetails.course?.description || "");
  const [image, setImage] = useState(courseDetails.course?.imageLink || "");
  const [price, setPrice] = useState(courseDetails.course?.price || "");
  

  // console.log(courseDetails)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
        <div style={{ padding: 20 }}>
          <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
          <TextField
            value={title}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />

          <TextField
            value={description}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />

          <TextField
            value={image}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />
          <TextField
            value={price}
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />

<Button
  variant="contained"
  onClick={async () => {
    try {
      const response = await axios.put(`/api/updateCourse`, {
        courseId: courseDetails.course._id,
        title: title,
        description: description,
        imageLink: image,
        price: price,
        published: true,
      });
      let updatedCourse = {
        _id: courseDetails.course._id,
        title: title,
        description: description,
        imageLink: image,
        price: price,
      };
      setCourse({ course: updatedCourse, isLoading: false });
      console.log('Course updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating course:', error.response?.data || error.message);
    }
  }}
>
  Update course
</Button>

        </div>
      </Card>
    </div>
  );
}

export default UpdateCard;
