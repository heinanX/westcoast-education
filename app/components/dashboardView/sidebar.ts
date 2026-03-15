import { createElement } from "../../helpers/helpers.js";
import {
  renderAddCourseForm,
  renderDeleteView,
  renderCourseBookings,
  renderUpdateView,
} from "./contentArea.js";

type Option = {
  method: string;
  func: () => void;
};

export const createSidebar = (contentArea: HTMLElement) => {
  const options: Option[] = [
    { method: "Add New Course", func: () => renderAddCourseForm(contentArea) },
    {
      method: "List Course Bookings",
      func: () => renderCourseBookings(contentArea),
    },
    { method: "Update Course", func: () => renderUpdateView(contentArea) },
    { method: "Delete Course", func: () => renderDeleteView(contentArea) },
  ];
  const aside: HTMLElement = createElement("aside");
  const nav: HTMLElement = createElement("nav");
  const list: HTMLElement = createElement("ul", { classes: ["dv-nav-list"] });

  options.forEach((o) => {
    const listItem: HTMLElement = createElement("li", {
      classes: ["dv-listItem"],
    });
    const btn = createElement("button", {
      text: o.method,
      classes: ["dv-btn"],
    }) as HTMLButtonElement;
    btn.addEventListener("click", o.func);

    listItem.append(btn);
    list.append(listItem);
  });
  nav.append(list);
  aside.append(nav);
  return aside;
};
