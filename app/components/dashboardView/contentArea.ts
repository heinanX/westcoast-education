import { createElement } from "../../helpers/helpers.js";
import { Course } from "../../models/courseModel.js";
import { getAllCourses } from "../../services/courseService.js";
import { listCourses } from "./listDataModels/listDataModels.js";
import { courseForm } from "./courseForm.js";

export const renderAddCourseForm = (contentArea: HTMLElement) => {
  courseForm(contentArea);
};
export const renderCourseBookings = async (contentArea: HTMLElement) => {
  const courses: Course[] = await getAllCourses();
  const createList = listCourses(contentArea, courses);
  contentArea.append(createList);
};
export const renderUpdateView = (contentArea: HTMLElement) => {
  contentArea.textContent = "";
  const p = createElement("p", { text: "Update action not implemented" });
  contentArea.append(p);
};
export const renderDeleteView = (contentArea: HTMLElement) => {
  contentArea.textContent = "";
  const p = createElement("p", { text: "Delete action not implemented" });
  contentArea.append(p);
};

export const createContentArea = () => {
  const section = createElement("section");
  const p = createElement("p", {
    text: "choose an action you want to perform",
  });

  section.append(p);
  return section;
};
