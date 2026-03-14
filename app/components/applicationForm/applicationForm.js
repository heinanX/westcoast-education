import { createElement } from "../../helpers/helpers.js";

export const createApplicationForm = (courseId) => {
  const form = createElement("form", { classes: ["application-form"] });

  const overlay = createElement("div", { classes: ["application-overlay"] });
  const lockMsg = createElement("p", {
    text: "🔒 You must be logged in to book a course.",
    classes: ["overlay-message"],
  });
  const loginBtn = createElement("a", {
    text: "Log in or create an account",
    classes: ["overlay-btn"],
  });
  loginBtn.href = "#";
  overlay.append(lockMsg, loginBtn);

  const fields = [
    { label: "Full Name", type: "text", placeholder: "John Doe" },
    { label: "Billing Address", type: "text", placeholder: "123 Main St" },
    { label: "Email Address", type: "email", placeholder: "john@example.com" },
    { label: "Mobile Number", type: "tel", placeholder: "+46 70 000 00 00" },
  ];
  const labelCourseId = createElement("label", { text: "courseId" });
  const inputCourseId = createElement("input", { text: courseId });
  inputCourseId.disabled = true;
  labelCourseId.append(inputCourseId);
  form.append(labelCourseId);

  fields.forEach(({ label, type, placeholder }) => {
    const labelEl = createElement("label", { text: label });
    const input = createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.disabled = true;
    labelEl.append(input);
    form.append(labelEl);
  });

  const submitBtn = createElement("button", {
    text: "Book Course",
    classes: ["submit-btn"],
  });
  submitBtn.disabled = true;

  form.append(submitBtn, overlay);
  return form;
};
