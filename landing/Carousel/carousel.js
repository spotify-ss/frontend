class Carousel {
    constructor(element) {
        this.element = element;
        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');
        this.imgs = document.querySelectorAll('.carousel-img');
        this.counterPre = this.imgs.length - 1;
        this.counterCurr = 0;
        this.counterNex = 1;
        window.addEventListener('load', this.loadFirstImg());
        window.setInterval(this.changeImgR.bind(this), 9000);
        // this.rightBtn.addEventListener('click', () => this.changeImgR());
        // this.leftBtn.addEventListener('click', () => this.changeImgL());
    }

    loadFirstImg() {
        let previousImg = this.imgs[this.counterPre];
        let currantImg = this.imgs[this.counterCurr];
        let nextImg = this.imgs[this.counterNex];

        this.imgs.forEach((pic) => {
            pic.style.display = 'none';
            pic.style.zIndex = '0';
            pic.style.transition = 'all 3s linear';
        });

        previousImg.style.display = 'block';
        previousImg.style.zIndex = '0';
        previousImg.style.opacity = '1';

        currantImg.style.display = 'block';
        currantImg.style.zIndex = '1';
        currantImg.style.opacity = '1';

        nextImg.style.display = 'block';
        nextImg.style.zIndex = '1';
        nextImg.style.opacity = '0';
    }

    changeImgR() {
        //--------------checks number to keep counter looping within number of imgs----------
        if (this.counterPre >= this.imgs.length - 1) {
            this.counterPre = 0;
        } else {
            this.counterPre++;
        }

        if (this.counterCurr >= this.imgs.length - 1) {
            this.counterCurr = 0;
        } else {
            this.counterCurr++;
        }

        if (this.counterNex >= this.imgs.length - 1) {
            this.counterNex = 0;
        } else {
            this.counterNex++;
        }

        let previousImg = this.imgs[this.counterPre];
        let currantImg = this.imgs[this.counterCurr];
        let nextImg = this.imgs[this.counterNex];

        // window.setTimeout(function () {
        //     console.log(previousImg);
        //     previousImg.style.display = "none";
        // }, 2000);

        this.imgs.forEach((pic) => {
            pic.style.display = 'none';
            pic.style.zIndex = '0';
            pic.style.transition = 'all 3s linear';
        });

        previousImg.style.display = 'block';
        previousImg.style.zIndex = '0';
        previousImg.style.opacity = '1';

        currantImg.style.display = 'block';
        currantImg.style.zIndex = '1';
        currantImg.style.opacity = '1';

        nextImg.style.display = 'block';
        nextImg.style.zIndex = '1';
        nextImg.style.opacity = '0';
    }

    changeImgL() {
        //---------------------------------------change without animation---------------
        // if (this.counter === 0) {
        // 	this.counter = this.imgs.length - 1;
        // } else {
        // 	this.counter--;
        // }
        // this.currantImg = this.imgs[this.counter];
        // this.imgs.forEach((pic) => (pic.style.display = 'none'));
        // this.currantImg.style.display = 'block';

        //--------------checks number to keep counter looping within number of imgs----------
        if (this.counterPre <= 0) {
            this.counterPre = this.imgs.length - 1;
        } else {
            this.counterPre--;
        }

        if (this.counterCurr <= 0) {
            this.counterCurr = this.imgs.length - 1;
        } else {
            this.counterCurr--;
        }

        if (this.counterNex <= 0) {
            this.counterNex = this.imgs.length - 1;
        } else {
            this.counterNex--;
        }

        let previousImg = this.imgs[this.counterPre];
        let currantImg = this.imgs[this.counterCurr];
        let nextImg = this.imgs[this.counterNex];

        // window.setTimeout(function () {
        //     console.log(previousImg);
        //     previousImg.style.display = "none";
        // }, 2000);

        this.imgs.forEach((pic) => {
            pic.style.display = 'none';
            pic.style.width = '00%';
            pic.style.transform = 'translate(-100%, 0)';
            pic.style.order = '0';
            pic.style.zIndex = '0';
            // pic.style.transition = 'all 2s linear';
        });

        previousImg.style.display = 'block';
        previousImg.style.order = '0';
        previousImg.style.zIndex = '1';
        previousImg.style.width = '0%';
        previousImg.style.transform = 'translate(-100%, 0)';
        previousImg.style.transition = 'all 2s linear';

        currantImg.style.display = 'block';
        currantImg.style.order = '1';
        currantImg.style.zIndex = '1';
        currantImg.style.width = '100%';
        currantImg.style.transform = 'translate(0%, 0)';
        currantImg.style.transition = 'all 2s linear';

        nextImg.style.display = 'block';
        nextImg.style.order = '2';
        nextImg.style.zIndex = '1';
        nextImg.style.width = '0%';
        nextImg.style.transform = 'translate(100%, 0)';
        nextImg.style.transition = 'all 2s linear';
    }
}

let carousel = document.querySelector('.carousel');
// console.log(carousel);
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
// function doesThisWork() {
//     console.log('this works');
// }

// window.setInterval(doesThisWork, 2000);