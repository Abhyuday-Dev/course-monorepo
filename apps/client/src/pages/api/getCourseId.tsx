import type { NextApiRequest, NextApiResponse } from "next";
import { Course } from "db";
import { ensureDbConnected } from "@/lib/dbConnect";

type Data = {
  message: string;
  course?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();
  const { courseId } = req.query;

  try {
    const course = await Course.findById(courseId);
    if (course) {
      res.status(200).json({ message: "Course found", course });
    } else {
      res.status(404).json({ message: "Course Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching course" });
  }
}
