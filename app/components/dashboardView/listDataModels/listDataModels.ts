import { createElement } from "../../../helpers/helpers.js";
import { Course } from "../../../models/courseModel.js";
import { User } from "../../../models/userModel.js";
import { listBookingsByCourse } from "../../../services/courseService.js";

export const listCourses = (contentArea: HTMLElement, courses: Course[]) => {
  contentArea.textContent = "";
  const list: HTMLElement = createElement("ul");

  courses.forEach((c) => {
    const listItem: HTMLElement = createElement("li", {
      classes: ["bl-list-item"],
    });
    const title: HTMLElement = createElement("p", { text: c.title });
    const id: HTMLElement = createElement("p", { text: c.id });
    const btn = createElement("button", {
      text: "List bookings",
    }) as HTMLButtonElement;
    btn.addEventListener("click", () => listBookings(contentArea, c.id));

    listItem.append(id, title, btn);
    list.append(listItem);
  });

  return list;
};

export const listBookings = async (contentArea: HTMLElement, id: string) => {
  contentArea.textContent = "";

  const bookings: User[] = await listBookingsByCourse(id);
  let list: HTMLElement;

  if (bookings.length > 0) {
    list = createElement("ul");
    bookings.forEach((b) => {
      const listItem: HTMLElement = createElement("li", {
        classes: ["bl-list-item"],
      });
      const id: HTMLElement = createElement("p", { text: b.userId });
      const customerName: HTMLElement = createElement("p", {
        text: b.customerName,
      });
      const email: HTMLElement = createElement("p", { text: b.email });
      const phone: HTMLElement = createElement("p", { text: b.phoneNumber });
      const address: HTMLElement = createElement("p", { text: b.address });
      listItem.append(id, customerName, email, phone, address);
      list.append(listItem);
    });
  } else {
    list = createElement("p", { text: "No registered users yet" });
  }

  contentArea.append(list);
};
