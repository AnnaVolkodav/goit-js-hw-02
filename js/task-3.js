'use strict'

function getElementWidth(content, padding, border) {
    const c = Number.parseFloat(content);
    const p = Number.parseFloat(padding);
    const b = Number.parseFloat(border);
    const width = c + (p + b)*2;
    return width;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));