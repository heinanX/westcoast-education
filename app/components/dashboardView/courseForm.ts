import { createElement } from "../../helpers/helpers.js";
import { CreateCourse } from "../../models/courseModel.js";
import { saveCourseToDb } from "../../services/courseService.js";

export const courseForm = (contentArea: HTMLElement) => {
  contentArea.textContent = "";

  const form = createElement("form", { classes: ["add-course-form"] });

  const fields = [
    { label: "Id", type: "text", name: "id" },
    { label: "Title", type: "text", name: "title" },
    { label: "Days", type: "number", name: "days" },
    { label: "Price", type: "text", name: "price" },
  ];

  fields.forEach(({ label, type, name }) => {
    const labelEl: HTMLElement = createElement("label", {
      text: label,
      classes: ["form-label"],
    });
    const input = createElement("input") as HTMLInputElement;
    input.type = type;
    input.name = name;
    labelEl.append(input);
    form.append(labelEl);
  });

  const submitBtn = createElement("button", {
    text: "Add Course",
    classes: ["submit-btn"],
  }) as HTMLButtonElement;
  submitBtn.type = "submit";

  form.append(submitBtn);

  form.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(form as HTMLFormElement);
    const newCourse: CreateCourse = {
      id: formData.get("id") as string,
      title: formData.get("title") as string,
      days: Number(formData.get("days")),
      price: Number(formData.get("price")),
    };

    const res = await saveCourseToDb(newCourse);
    if (res && res.ok) {
      contentArea.textContent = "";
      const success = createElement("p", {
        text: "Course added successfully!",
        classes: ["success-msg"],
      });
      contentArea.append(success);
    } else {
      const error: HTMLElement = createElement("p", {
        text: "Something went wrong, please try again.",
        classes: ["error-msg"],
      });
      form.append(error);
    }
  });

  contentArea.append(form);
};
