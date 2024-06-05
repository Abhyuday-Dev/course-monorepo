import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState, isCourseLoading } from "store";
import GrayTopper from "../components/GrayTopper";
import UpdateCard from "../components/UpdateCard";
import CourseCard from "../components/CourseCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function Course() {
  const router = useRouter();
  const { courseId } = router.query;
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);
  console.log("hi",courseId)

  useEffect(() => {
    if (!courseId) return; // Wait for courseId to be defined
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/getCourseId`, {
          params: { courseId },
        });
        setCourse({ isLoading: false, course: response.data.course });
      } catch (error) {
        console.error("Failed to fetch course:", error);
        setCourse({ isLoading: false, course: null });
      }
    };
    fetchCourse();
  }, [courseId, setCourse]);

  if (courseLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GrayTopper />
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCard />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <CourseCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Course;
