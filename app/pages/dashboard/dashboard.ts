import { dashboardView } from "../../components/dashboardView/dashboardView.js";
import { renderHeader } from "../../components/header/header.js";
import { createElement } from "../../helpers/helpers.js";
import { getAllCourses } from "../../services/courseService.js";

const main = document.querySelector('main');

const init = async () => {
    renderHeader();
    if (main != null){
    const loading = createElement('p', { text: 'Loading...', classes: ['loading'] });
    main.append(loading);

    const data = await getAllCourses();

    loading.remove();
    console.log(data);
        dashboardView(main);
    }
    
}

init();