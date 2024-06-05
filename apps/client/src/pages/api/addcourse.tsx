// pages/api/course.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {Course} from "db"

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
  // Create a new course
  const course = new Course(req.body);
  // console.log(req.body);
  await course.save();
  res.json({ message: "Course Created Successfully", courseId: course.id });
}
