class InputControl extends HTMLInputElement {
    cloneValue = '';
    constructor() {
        super();
        console.log('Number Input is created');
        // this.valueAsNumber = 12;
        this.addEventListener('keypress', this.clickHandler);
        console.log(this.getAttribute('data-man'))
    }

    clickHandler(e) {
        if(e.key === 'a'){
            this.value = this.cloneValue;
        }
        console.log('Code: ', e.key);
        this.cloneValue = this.value;
    }
}
customElements.define('number-input', InputControl, {extends: 'input'});
