import { Course, CreateCourse } from "../models/courseModel";
import { User } from "../models/userModel";

const baseURL: string = "http://localhost:3000";

export const getAllCourses = async (): Promise<Course[]> => {
  const res = await fetch(`${baseURL}/courses`);
  if (!res.ok) throw new Error("Failed to fetch courses");
  return (await res.json()) as Course[];
};

export const getCourseById = async (id: string): Promise<Course> => {
  const res = await fetch(`${baseURL}/courses/${id}`);
  const data = (await res.json()) as Course;
  return data;
};

export const saveCourseToDb = async (
  newCourse: CreateCourse,
): Promise<Response | undefined> => {
  try {
    const res = await fetch(`${baseURL}/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const listBookingsByCourse = async (id: string): Promise<User[]> => {
  const res = await fetch(`${baseURL}/bookings?courseId=${id}`);
  const data = (await res.json()) as User[];
  return data;
};
