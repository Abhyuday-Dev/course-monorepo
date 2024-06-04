// pages/api/course.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Course } from "db";

import { ensureDbConnected } from "@/lib/dbConnect";

type Data = {
  message: string;
  courseId?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  
) {
  // Check if the user is authenticated
  await ensureDbConnected();
  const courseId=Cre
    const course=await Course.findById(courseId);
    if(course){
        res.json({course})
    }
    else{
        res.status(404).json({message:"Course Not Found"});
    }
}
