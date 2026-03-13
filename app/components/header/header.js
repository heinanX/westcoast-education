import { createElement } from "../../helpers/helpers.js";

const navItems = [
        {
        title: 'Home',
        href: '/index.html'
    },
    {
        title: 'Courses',
        href: '/app/pages/courses/courses.html'
    },
    {
        title: 'Dashboard',
        href: '/app/pages/dashboard/dashboard.html'
    }
];
const bodyElement = document.querySelector('body');

const createListItem = (title, href) => {
    let li = createElement('li', {classes: ['list-item']});
    let a = createElement('a', {text: title});
    a.href = href;
    li.appendChild(a);
    return li;
}

const createList = (navItems) => {
    let ul = createElement('ul', {classes: ['navbar']});
    navItems.forEach(i => {
        const li = createListItem(i.title.toUpperCase(), i.href);
        ul.appendChild(li);
    });
    return ul;
}

export const renderHeader = () => {
    let header = createElement('header');
    let nav = createElement('nav');
    const logo = createElement('h1', {text: 'Masters.'});
    const list = createList(navItems);
    nav.appendChild(list);
    header.append(logo, nav);
    bodyElement.prepend(header);
}