const bodyElement = document.querySelector('body');
console.log('Header script loaded!');
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

const createListItem = (title, href) => {
    let li = document.createElement('li');
    li.classList.add('list-item');
    let a = document.createElement('a');
    a.textContent = title;
    a.href = href;
    li.appendChild(a);
    return li;
}

const createList = (navItems) => {
    let ul = document.createElement('ul');
    ul.classList.add('navbar');
    navItems.forEach(i => {
        const li = createListItem(i.title, i.href);
        ul.appendChild(li);
    });
    return ul;
}

const createHeaderLogo = () => {
    let img = document.createElement('img');
    img.classList.add('header-logo');
    //img.src = 
    return img;
}

const renderHeader = () => {
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    const img = createHeaderLogo();
    const list = createList(navItems);
    nav.appendChild(list);
    header.append(img, nav);
    bodyElement.prepend(header);
}

renderHeader();