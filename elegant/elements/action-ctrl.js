class ActionCtrlElement extends HTMLElement{
    static observedAttributes = ["clicked", "checkable"];
    InputElementFlag=true;
    constructor() {
        // 必须首先调用 super 方法
        super();
    }
    connectedCallback() {
        $set_attr(this,"tabindex",0)
        $set_attr(this,"role","button")
        this.addEventListener('keydown', this.css_click_keydown);
        this.addEventListener('keyup', this.css_click_keyup);
        this.addEventListener('click', this.click_eventer);
        this.addEventListener("mouseover",()=>{this.hover=true;});
        this.addEventListener("mouseleave",()=>{this.hover=false;});
    }
    css_click_keydown(e){
        if(e.keyCode === 32) {
            $set_attr(this, 'clicked', '');
        }
    }
    css_click_keyup(e){
        if(e.keyCode === 32) {
            $remove_attr(this, 'clicked', null);
            this.click();
        }
    }
    click_eventer(e){
        if(!$has_attr(this,"disabled")&&$has_attr(this, 'checkable')){
            if($has_attr(this, 'checked')){
                $remove_attr(this, 'checked');
            }
            else{
                $set_attr(this, 'checked', '');
            }
        }
    }
}
window.customElements.define('action-ctrl',ActionCtrlElement);