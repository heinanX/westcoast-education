export const createElement = (element, options = {}) => {
    const { classes = [], text = '', isHtml = false, id = '' } = options;
    let el = document.createElement(element);
    if (classes.length) el.classList.add(...classes);
    if (text) isHtml ? el.innerHTML = text : el.innerText = text;
    if (id) el.id = id;
    return el;
}