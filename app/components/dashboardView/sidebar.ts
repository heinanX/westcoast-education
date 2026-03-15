import { createElement } from "../../helpers/helpers.js"
import { renderAddView, renderDeleteView, renderFindView, renderUpdateView } from "./contentArea.js";

type Option = {
    method: string;
    func: () => void;
}

export const createSideBar = (contentArea: HTMLElement) => {
    const options: Option[] = [
        { method: 'Add New Course', func: () => renderAddView(contentArea)},
        { method : 'Find Course', func: () => renderFindView(contentArea)},
        { method : 'Update Course', func: () => renderUpdateView(contentArea)},
        { method : 'Delete Course', func: () => renderDeleteView(contentArea)}
    ];
    const aside: HTMLElement = createElement('aside');
    const nav: HTMLElement = createElement('nav');
    const list: HTMLElement = createElement('ul', {classes: ['dv-nav-list']});
    
    options.forEach(o => {

        const listItem: HTMLElement = createElement('li', {classes: ['dv-listItem']});
        const btn: HTMLElement = createElement('button', {text: o.method, classes: ['dv-btn']});
        btn.addEventListener('click', o.func);

        listItem.append(btn);
        list.append(listItem);
    });
    nav.append(list);
    aside.append(nav);
    return aside;
}