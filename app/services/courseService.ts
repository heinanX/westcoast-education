import { Course, CreateCourse } from "../models/courseModel";
import { User } from "../models/userModel";

const baseURL: string = "http://localhost:3000";

export const getAllCourses = async () => {
  const res = await fetch(`${baseURL}/courses`);
  const data = (await res.json()) as Course[];
  return data;
};

export const getCourseById = async (id: string) => {
  const res = await fetch(`${baseURL}/courses/${id}`);
  const data = (await res.json()) as Course[];
  return data;
};

export const saveCourseToDb = async (newCourse: CreateCourse) => {
  try {
    const res = await fetch(`${baseURL}/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const listBookingsByCourse = async (id: string) => {
  const res = await fetch(`${baseURL}/bookings?courseId=${id}`);
  const data = (await res.json()) as User[];
  return data;
};
