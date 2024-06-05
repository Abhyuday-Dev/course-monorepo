// /pages/api/updateCard.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb'; // Import ObjectId from mongodb
import { Course } from 'db'; // Adjust the import to match your project structure
import { ensureDbConnected } from '@/lib/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureDbConnected();

  if (req.method === 'PUT') {
    const { courseId, title, description, imageLink, price, published } = req.body;

    try {
      const updatedCourse = await Course.findByIdAndUpdate(courseId, {
        title,
        description,
        imageLink,
        price,
        published,
      }, { new: true });

      if (updatedCourse) {
        res.json({ message: 'Course Updated Successfully', course: updatedCourse });
      } else {
        res.status(404).json({ message: 'Course Not Found' });
      }
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
