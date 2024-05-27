class Slider {
    constructor(sliderId) {
        this.sliderId = document.getElementById(sliderId);
        this.sliderChildren = this.sliderId.children;
        this.prevSliderCounter = 1;
        this.sliderCounter = 0;
        this.quickButtons = this.sliderId.children.length-3

        this.Buttons();
        this.startAutoSlide();
        this.createQuickButtons()
    }

    Buttons() {
        this.sliderId.querySelector('.sliderContainer__leftB').addEventListener('click', () => this.downCounter());
        this.sliderId.querySelector('.sliderContainer__rightB').addEventListener('click', () => this.upCounter());
    }

    goToImg(choice) {
        if (choice !== this.sliderCounter){
            this.sliderChildren[this.sliderCounter+3].classList.remove("sliderContainer__imgShown");
            this.sliderChildren[this.sliderCounter+3].classList.add("sliderContainer__imgNotShown");
            this.prevSliderCounter = this.sliderCounter;
            
            if(this.prevSliderCounter === -1){
                console.log(this.sliderId.children.length-4)
                this.prevSliderCounter = this.sliderId.children.length-4
            }        
            this.sliderCounter = choice;
            this.sliderSelection();
            }
    }

    createQuickButtons() {
        const buttonContainer = this.sliderId.querySelector('#quickButtonsContainer');
        for (let i = 0; i < this.quickButtons; i++) {
            const button = document.createElement('button');            
            button.classList.add('sliderContainer__buttonContainer__bottomButtons');
            if (i === 0){
                button.classList.add('mainColor');
            }else{
                button.classList.add('backColor');
            }
            button.id = `quickButton${i}`;
            button.addEventListener('click', () => this.goToImg(i));
            buttonContainer.appendChild(button);
        }        
    }


    startAutoSlide() {
        setInterval(() => this.upCounter(), 5000);        
    }

    upCounter() {
        this.prevSliderCounter = this.sliderCounter;
        this.sliderCounter++;
        if (this.sliderCounter >= this.quickButtons) {
            this.sliderCounter = 0;
        }
        this.sliderSelection();
    }

    downCounter() {
        this.prevSliderCounter = this.sliderCounter;
        this.sliderCounter--;
        if (this.sliderCounter < this.quickButtons) {
            this.sliderCounter = 4;
        }
        this.sliderSelection();
    }

    sliderSelection() {
        const prevButton = document.getElementById(`quickButton${this.prevSliderCounter}`);
        const currentButton = document.getElementById(`quickButton${this.sliderCounter}`);
        this.sliderChildren[this.prevSliderCounter+3].classList.remove("sliderContainer__imgShown");
        this.sliderChildren[this.prevSliderCounter+3].classList.add("sliderContainer__imgNotShown");
        this.sliderChildren[this.sliderCounter+3].classList.remove("sliderContainer__imgNotShown");
        this.sliderChildren[this.sliderCounter+3].classList.add("sliderContainer__imgShown");        
        prevButton.classList.remove('mainColor');
        prevButton.classList.add('backColor');
        currentButton.classList.remove('backColor');
        currentButton.classList.add('mainColor');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider('sliderImagenes');
});