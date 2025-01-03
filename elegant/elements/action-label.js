class ActionLabelElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.addEventListener("click",this.click_eventer);
        this.addEventListener("mouseover",this.mouseover_eventer);
    }
    click_eventer(e){
        const target=this.get_targeted_element();
        target.click();
    }
    mouseover_eventer(e) {
        const target=this.get_targeted_element();
        console.log(target);
        target.dispatchEvent(new CustomEvent("mouseover",{
            bubbles: true,
            cancelable: true
        }));
    }
    get_targeted_element() {
        for(const i of this.children){
            if($has_attr(i,"label-target")){
                return i
            }
        }
        for(const i of this.children){
            if(i.constructor.name===ActionCtrlElement.name){
                return i;
            }
        }
    }
}
window.customElements.define('action-label',ActionLabelElement);