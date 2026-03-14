import { createElement } from "../../helpers/helpers.js";

export const featureCard = (courses, num) => {
  const highlightsSection = createElement("section", {
    classes: ["highlights-section"],
  });

  const leftColumn = createElement("div", { classes: ["left-column"] });
  const img = createElement("img");
  img.src = courses[num].image;
  img.alt = courses[num].alt;
  img.loading = "lazy";
  img.width = 500;
  img.height = 300;
  leftColumn.append(img);

  const rightColumn = createElement("article", { classes: ["right-column"] });

  const container = createElement("div");
  const pitch = createElement("p", {
    text: "Check it out now!",
    classes: ["hs-pitch"],
  });

  const title = createElement("h3", { text: courses[num].title });
  const id = createElement("p", {
    text: `#${courses[num].id}`,
    classes: ["hs-id"],
  });

  const summary = createElement("p", {
    text: courses[num].summary,
    classes: ["hs-summary"],
  });

  container.append(pitch, title, id, summary);

  const readMoreBtn = createElement("button", {
    text: "Read More ->",
    classes: ["hs-btn"],
  });
  readMoreBtn.addEventListener("click", () => {
    window.location.href = `../courseDetails/course-details.html?id=${courses[num].id}`;
  });

  rightColumn.append(container, readMoreBtn);

  highlightsSection.append(leftColumn, rightColumn);
  return highlightsSection;
};
