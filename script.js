const hamBurger = document.querySelector('.hamburger');
const rightCont = document.querySelector('.right');
const closeMenu = document.querySelector('.closeMenu');
const heroImg = document.querySelector('.heroSec .right img');
console.log(heroImg);
const arr = [hamBurger, closeMenu];
let bool = false;
arr.forEach((currentNode) => {
    currentNode.addEventListener('click', () => {
        bool = !bool;
        if (bool) {
            rightCont.style.opacity = '1';
            rightCont.style.pointerEvents = 'auto';
            hamBurger.style.opacity = '0';
            hamBurger.style.pointerEvents = 'none';
        } else {
            rightCont.style.opacity = '0';
            rightCont.style.pointerEvents = 'none';
            hamBurger.style.opacity = '1';
            hamBurger.style.pointerEvents = 'auto';
            window.addEventListener('resize', function () {
                if (window.innerWidth > 885) {
                    rightCont.style.opacity = '1';
                    rightCont.style.pointerEvents = 'auto';
                    bool = true;
                }
            });
        }
    });
});
if (window.innerWidth <= 885) {
    heroImg.src = './images/image-hero-mobile.png';
}
window.addEventListener('resize', () => {
    if (window.innerWidth <= 885) {
        heroImg.src = './images/image-hero-mobile.png';
    } else {
        heroImg.src = './images/image-hero-desktop.png';
    }
});
