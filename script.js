const buttonReserv = document.querySelector('.btnReserv');
const callBTN = document.querySelector('.btnCall');
const textBTN = document.querySelector('.btnText');

gsap.from('.navbar', { y: -100, opacity: 0, duration: 1.5, delay: 0.5 })
gsap.from('.btnReserv', { y: 100, opacity: 0, duration: 1.5, delay: 1 })

buttonReserv.addEventListener('click', show);

function show() {
    gsap.to('.btnCall', { opacity: 1, duration: 1 })
    gsap.to('.btnText', {opacity: 1, duration: 1})
}