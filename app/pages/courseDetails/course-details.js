import { renderHeader } from "../../components/header/header.js";
import { createElement } from "../../helpers/helpers.js";
import { pageHeader } from "../../components/pageHeader/pageHeader.js";
import { createApplicationForm } from "../../components/applicationForm/applicationForm.js";

renderHeader();
const main = document.querySelector("main");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const getData = async (num) => {
  const res = await fetch(`http://localhost:3000/courses/${num}`);
  const data = await res.json();
  return data;
};

const renderPageInfo = (data) => {
  const container = createElement("div", { classes: ["cd-container"] });
  const courseInfo = CourseInfo(data);
  const courseForm = CourseForm(data);

  container.append(courseInfo, courseForm);
  main.append(container);
};

const CourseInfo = (course) => {
  const leftColumn = createElement("section", { classes: ["cd-left-col"] });
  const title = createElement("h2", { text: course.title });
  const courseId = createElement("p", { text: `Course ID: ${course.id}` });
  leftColumn.append(title, courseId);

  const fields = [
    { label: null, value: course.summary, className: "cd-summary" },
    { label: "Category", value: course.category, className: "cd-category" },
    {
      label: "Availability",
      value:
        course.availability == "both"
          ? "classroom / remote"
          : course.availability,
      class: "cd-availability",
    },
    { label: "⭐ Rating", value: course.rating, className: "cd-rating" },
    { label: "⏱ Number of Days", value: course.days, className: "cd-days" },
    {
      label: "📅 Start Date",
      value: course.startDate,
      className: "cd-start-date",
    },
  ];

  fields.forEach(({ label, value, className }) => {
    const p = createElement("p", {
      text: `${label != null ? label + ": " : ""} ${value}`,
      classes: [className],
    });
    leftColumn.append(p);
  });

  return leftColumn;
};

const CourseForm = (course) => {
  const rightColumn = createElement("section", { classes: ["cd-right-col"] });
  const form = createApplicationForm(course.id);

  rightColumn.append(form);
  return rightColumn;
};

const init = async () => {
  const data = await getData(id);
  pageHeader(`${data.title}.`, data.image);
  renderPageInfo(data);
};

init();
