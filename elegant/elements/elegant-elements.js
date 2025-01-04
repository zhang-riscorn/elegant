function load_element(element){
    if(typeof element !== 'string'){
        throw new Error("Element must be a string.");
    }
    $load_script(`./elegant/elements/${element}.js`);
    $load_style(`./elegant/elements/${element}.css`);
}