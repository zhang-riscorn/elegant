function $select(selector) {
    return document.querySelector(selector);
}
function $selectAll(selector) {
    return document.querySelectorAll(selector);
}
function $set_attr(element,attribute,value) {
    return element.setAttribute(attribute,value);
}
function $get_attr(element,attribute) {
    return element.getAttribute(attribute);
}
function $has_attr(element,attribute) {
    return element.hasAttribute(attribute);
}
function $remove_attr(element,attribute) {
    return element.removeAttribute(attribute);
}
function $load_script(src){
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.head.appendChild(script);
}

function $load_style(src){
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = src;
    document.head.appendChild(style);
}
const delay = (n) => new Promise(r => setTimeout(r, n * 1000));