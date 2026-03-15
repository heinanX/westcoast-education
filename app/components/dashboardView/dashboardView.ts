import { createElement } from "../../helpers/helpers.js";
import { createContentArea } from "./contentArea.js";
import { createSidebar } from "./sidebar.js";

export const dashboardView = (main: HTMLElement) => {
  const container: HTMLElement = createElement("div", {
    classes: ["dv-content"],
  });
  const contentArea: HTMLElement = createContentArea();
  const sideBar: HTMLElement = createSidebar(contentArea);

  container.append(sideBar, contentArea);
  if (main != null) {
    main.append(container);
  }
};
