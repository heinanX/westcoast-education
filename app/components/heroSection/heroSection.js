import { createElement } from "../../helpers/helpers.js";

const getParentElement = document.querySelector('main');
export const renderHeroSection = () => {
    const section = createElement('section', {id: 'heroSection'});

    let img = createElement('img');
    img.src = 'app/assets/images/heroImage.jpg';
    img.alt = 'students in a learning environment';

    const overlayDiv  = createElement('div', {classes: ['overlay']});

    let article = createElement('article');
    let h2 = createElement('h2', {text: 'New Skills. Old Skills. Mastered.'});
    const p = createElement('p', {text: 'Join thousands of students transforming their careers with our hands-on courses.'})
    let a = createElement('a', {classes: ['imitate-btn'], text: 'Start Learning Free →'});

    a.href = 'app/pages/courses/courses.html'
    
    article.append(h2, p, a);
    section.append(img, overlayDiv, article);


    getParentElement.prepend(section);
}