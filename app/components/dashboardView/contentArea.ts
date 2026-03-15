import { createElement } from "../../helpers/helpers.js"

export const renderAddView = (contentArea: HTMLElement)=> {
    contentArea.textContent = '';
    const p = createElement('p', {text: 'this was added'});
    contentArea.append(p);
}
export const renderFindView = (contentArea: HTMLElement)=> {
    contentArea.textContent = '';
    const p = createElement('p', {text: 'Find action not implemented'});
    contentArea.append(p);
}
export const renderUpdateView = (contentArea: HTMLElement)=> {
    contentArea.textContent = '';
    const p = createElement('p', {text: 'Update action not implemented'});
    contentArea.append(p);
}
export const renderDeleteView = (contentArea: HTMLElement)=> {
    contentArea.textContent = '';
    const p = createElement('p', {text: 'Delete action not implemented'});
    contentArea.append(p);
}

export const createContentArea = () => {
const section = createElement('section');
    const p = createElement('p', {text: 'choose an action you want to perform'});

    section.append(p);
    return section;

}