import { createElement } from "../../../helpers/helpers.js";
import { Course } from "../../../models/courseModel.js";
import { User } from "../../../models/userModel.js";
import { listBookingsByCourse } from "../../../services/courseService.js";

export const listCourses = (contentArea: HTMLElement, courses: Course[]) => {
  contentArea.textContent = "";
  const list = createElement("ul");
  courses.forEach((c) => {
    const listItem = createElement("li", { classes: ["bl-list-item"] });
    const title = createElement("p", { text: c.title });
    const id = createElement("p", { text: c.id });
    const btn = createElement("button", { text: "List bookings" });
    btn.addEventListener("click", () => listBookings(contentArea, c.id));
    listItem.append(id, title, btn);
    list.append(listItem);
  });
  return list;
};

export const listBookings = async (contentArea: HTMLElement, id: string) => {
  contentArea.textContent = "";
  const bookings: User[] = await listBookingsByCourse(id);
  console.log(bookings);
  let list: HTMLElement;

  if (bookings.length > 0) {
    list = createElement("ul");
    bookings.forEach((b) => {
      const listItem = createElement("li", { classes: ["bl-list-item"] });
      const id = createElement("p", { text: b.userId });
      const customerName = createElement("p", { text: b.customerName });
      const email = createElement("p", { text: b.email });
      const phone = createElement("p", { text: b.phoneNumber });
      const address = createElement("p", { text: b.address });
      listItem.append(id, customerName, email, phone, address);
      list.append(listItem);
    });
  } else {
    list = createElement("p", { text: "No registered users yet" });
  }

  contentArea.append(list);
};
