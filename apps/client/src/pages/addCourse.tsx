import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter
import { AddCourse } from "@repo/ui/addCourse";

const AddCoursePage = () => {
  const [error, setError] = useState(null);
  const router = useRouter(); // Get the router object

  const handleAddCourse = async (title:string, description:string, imageLink:string, price:number, isPublished:boolean) => {
    try {
      const response = await axios.post('/api/addcourse', {
        title,
        description,
        imageLink,
        price,
        isPublished
      });
      console.log(response.data); // Handle the response as needed
      router.push('/courses'); // Redirect to the courses page
    } catch (error) {
      setError(error.response.data.message); // Set the error message
    }
  };

  return (
    <div>
      <AddCourse onClick={handleAddCourse} />
      {error && <div>{error}</div>} {/* Display the error message if there is one */}
    </div>
  );
};

export default AddCoursePage;
