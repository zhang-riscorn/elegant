load_element("action-ctrl")
load_element("action-label")
document.addEventListener("DOMContentLoaded", ()=>{
    const i=document.querySelector("#checkbox");
    const j=document.querySelector("#theme-link");
    i.addEventListener("change",()=>{
        console.log(i.checked,j);
        if(i.checked){
            $set_attr(j,"href","elegant/elegant-theme/theme.css");
        }else{
            $remove_attr(j,"href");
        }
    })
});