import { createElement } from "../../helpers/helpers.js"



export const pageHeader = (heading) => {
    const main = document.querySelector('main');
    const section = createElement('section', {classes: ['pageHeader']});
    
    const img = createElement('img');
    img.src = '../../assets/images/heroImage.jpg';
    const div = createElement('div', {classes: ['overlay']});
    
    const span = createElement('span');
    const h2 = createElement('h2', {text: heading});

    span.append(h2);
    section.append(img, div, span);
    main.append(section);
}