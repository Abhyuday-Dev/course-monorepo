import { Card, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { courseTitle, courseImage, coursePrice ,courseDescription} from "store";

function CourseCard() {
  const title = useRecoilValue(courseTitle);
  const imageLink = useRecoilValue(courseImage);
  const price = useRecoilValue(coursePrice);
  const description = useRecoilValue(courseDescription);

  return (
    <div style={{ display: "flex", marginTop: 50, justifyContent: "center", width: "100%" }}>
      <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2
      }}>
        <img src={imageLink} style={{ width: 350 }} alt="Course" />
        <div style={{ marginLeft: 10 }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle2" style={{ color: "gray" }}>
            {description}
          </Typography>
          <Typography variant="subtitle1">
            <b>Rs {price} </b>
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default CourseCard;
