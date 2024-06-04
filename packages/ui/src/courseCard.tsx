import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button,Typography } from "@mui/material";

type Course = {
    imageLink: string;
    title: string;
    description: string;
    price?: number;
    
  };


export function CourseCard({ course }: { course: Course }) {
    
    return (
      <Card sx={{ width:"400px",maxWidth: 400, margin: "1.5rem" }}>
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={course.imageLink}
        />{" "}
        <CardContent>
          {" "}
          <Typography gutterBottom variant="h5" component="div">
            {" "}
            {course.title}{" "}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            {" "}
            {course.description}{" "}
          </Typography>{" "}
        </CardContent>{" "}
        <div style={{ float:"right", margin: "20px" }}>
          {" "}
          <Button
            variant="contained"
            size="small"
            style={{backgroundColor:"#5624d0",fontWeight:"bold"}}
            onClick={() => {
              
            }}
          >
            Update
          </Button>{" "}
        </div>{" "}
      </Card>
    );
  }