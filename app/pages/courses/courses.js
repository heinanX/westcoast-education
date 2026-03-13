import { createCard } from "../../components/courseCard/courseCard.js";
import { featureCard } from "../../components/featureCard/featureCard.js";
import { renderHeader } from "../../components/header/header.js";
import { pageHeader } from "../../components/pageHeader/pageHeader.js";
import { createElement } from "../../helpers/helpers.js";

renderHeader();
pageHeader("Courses.");

const main = document.querySelector("main");

const populateTopBanner = () => {
  const schools = [
    "Berkley",
    "UCLA",
    "Oxford",
    "University of Amsterdam",
    "Seoul National University",
    "University of Toronto",
  ];
  const bannerList = createElement("ul", { classes: ["top-banner"] });
  schools.forEach((s) => {
    const school = createElement("li", { text: s });
    bannerList.append(school);
  });
  main.append(bannerList);
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/courses");
  const data = await res.json();
  console.log(data);

  return data;
};

const renderPopularCourses = (courses) => {
  const mostPopular = [];
  courses.forEach((c) => {
    if (c.rating > 8) {
      mostPopular.push(c);
    }
  });

  console.log(mostPopular);
  let num = Math.floor(Math.random() * mostPopular.length);
  const highlightsSection = featureCard(mostPopular, num);
  main.append(highlightsSection);
};

const createCourseList = (courses) => {
  const ul = createElement("ul", { classes: ["course-list"] });
  courses.forEach((c) => {
    const courseCard = createCard(c);
    ul.append(courseCard);
  });
  main.append(ul);
};

const init = async () => {
  populateTopBanner();
  const courses = await getData();
  renderPopularCourses(courses);
  createCourseList(courses);
};

init();
