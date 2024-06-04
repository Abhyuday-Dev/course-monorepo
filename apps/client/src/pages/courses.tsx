
import { useEffect, useState } from "react";
import axios from "axios";
import {CourseCard} from "@repo/ui/courseCard";

function Courses() {
  const [courses, setCourses] = useState([]);

  const init = async () => {
    const response = await axios.get(`api/getCourses`, {
    });

    console.log(response.data);
    setCourses(response.data.courses);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <CourseCard course={course} />;
      })}
    </div>
  );
}

export default Courses;