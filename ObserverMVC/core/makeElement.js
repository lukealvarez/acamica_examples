function makeElement(type, props, text) {

    const element = document.createElement(type);
    const textNode = document.createTextNode(text);

    Object.keys(props).forEach( prop => {
        element[prop] = props[prop];
    });

    element.appendChild(textNode);
    
    return element;
}

const h1 = (...args) => makeElement('h1', ...args);