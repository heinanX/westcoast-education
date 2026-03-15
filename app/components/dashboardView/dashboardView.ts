import { createElement } from "../../helpers/helpers.js"
import { createContentArea } from "./contentArea.js";
import { createSideBar } from "./sidebar.js";


export const dashboardView = (main: HTMLElement) => {

    const container = createElement('div', {classes: ['dv-content']});
    const contentArea = createContentArea();
    const sideBar = createSideBar(contentArea);


    container.append(sideBar, contentArea);
    if (main!= null){
        main.append(container);
    }
}