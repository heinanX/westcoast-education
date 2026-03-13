import { createElement } from "../../helpers/helpers.js";

export const createCard = (c) => {
  const courseCard = createElement("li", { classes: ["course-card"] });

  const cardHeader = createElement("div", { classes: ["course-card-header"] });
  const category = createElement("p", {
    text: c.category,
    classes: ["list-item-category"],
  });
  const img = createElement("img");
  img.src = c.image;
  img.alt = c.alt;
  img.loading = "lazy";
  img.width = 670;
  img.height = 150;

  const cardMid = createElement("div", { classes: ["course-card-main"] });
  const title = createElement("h3", { text: c.title });
  const courseId = createElement("p", {
    text: `#${c.courseId}`,
    classes: ["list-item-courseId"],
  });

  const cardFooter = createElement("div", { classes: ["course-card-footer"] });
  const startDate = createElement("p", { text: c.startDate });
  const days = createElement("p", { text: c.days });
  const availability = createElement("p", {
    text: c.availability == "both" ? "classroom/remote" : c.availability,
  });

  cardHeader.append(category, img);
  cardMid.append(title, courseId, availability);
  cardFooter.append(startDate, days);
  courseCard.append(cardHeader, cardMid, cardFooter);
  return courseCard;
};
