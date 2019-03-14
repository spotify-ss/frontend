//Mobile/desktop menu
const logo = document.querySelector('.mobile-menu');
const navBar = document.querySelector('nav');

logo.addEventListener('click', function () {
    navBar.classList.toggle('navOn');
});


//button clicks
const button = document.querySelectorAll('button');

button.forEach(function (click) {
    click.addEventListener('mousedown', function () {
        click.classList.add('buttonClick');
    });

    click.addEventListener('mouseup', function () {
        click.classList.remove('buttonClick');
    });
});


//slogan animation

window.onload = function () {
    const slogan1 = document.querySelector(".slogan1");
    const slogan2 = document.querySelector(".slogan2");
    const button = document.querySelector('.sign-up');
    // TweenLite.to(slogan, 1, {
    //     left: "632px"
    // });

    TweenLite.from(slogan1, 4, {
        opacity: 0,
        left: "500px"
    });

    TweenLite.from(slogan2, 4, {
        opacity: 0,
        left: "500px",
        delay: 2
    });

    TweenLite.from(button, 7, {
        opacity: 0,
        delay: 5
    });
}

//css position sticky won't work for multiple reasons... this hack does!
const buttonNav = document.querySelector('.navButton');
const buttonSlogan = document.querySelector('.sign-up');

window.onscroll = function () {
    stickyButton()
};

function stickyButton() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        buttonNav.style.visibility = "visible";
        buttonSlogan.style.visibility = "hidden";
    } else {
        buttonNav.style.visibility = "hidden";
        buttonSlogan.style.visibility = "visible";
    }
}