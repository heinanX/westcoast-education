import { createElement } from "../../helpers/helpers.js";

export const createCard = (c) => {
  const courseCard = createElement("li", { classes: ["course-card"] });

  const cardHeader = createElement("div", { classes: ["cc-header"] });
  const category = createElement("p", {
    text: c.category,
    classes: ["cc-category"],
  });
  const img = createElement("img");
  img.src = c.image;
  img.alt = c.alt;
  img.loading = "lazy";
  img.width = 670;
  img.height = 150;

  const cardMid = createElement("div", { classes: ["cc-main"] });
  const title = createElement("h3", { text: c.title });
  const courseId = createElement("p", {
    text: `#${c.courseId}`,
    classes: ["cc-courseId"],
  });

  const cardFooter = createElement("div", { classes: ["cc-footer"] });
  const startDate = createElement("p", { text: c.startDate });
  const days = createElement("p", { text: c.days });
  const availability = createElement("p", {
    text: c.availability == "both" ? "classroom/remote" : c.availability,
  });

const btnContainer = createElement('div', {classes: ['cc-link-container']})
  const applyLink = createElement('a', {text: 'Read More or Apply', classes: ['cc-course-link']} )
  applyLink.href = `../courseDetails/course-details.html?id=${c.courseId}`;
  btnContainer.append(applyLink);


  cardHeader.append(category, img, btnContainer);
  cardMid.append(title, courseId, availability );
  cardFooter.append(startDate, days);
  courseCard.append(cardHeader, cardMid, cardFooter);
  return courseCard;
};
