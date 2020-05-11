import { Request, Response } from 'express';
import { findCourseById } from '../src/db-data';

export function saveCourse(req: Request, res: Response) {
    const id = req.params["id"];
    const changes = req.body;
    const course = findCourseById(id);

    console.log("Saving course", id, JSON.stringify(changes));

    course.description = changes.description;
    res.status(200).json(course);
}
