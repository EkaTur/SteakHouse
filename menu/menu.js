gsap.from('.headerOne', { x: -200, opacity: 0, duration: 1, delay: 0.5 })
gsap.from('.picOne', { x: -800, opacity: 0, duration: 1.5, delay: 1 })
gsap.from('.main-containerOne', { opacity: 0, duration: 1.5, delay: 1.5})

function scrollAnim() {
    gsap.from('.headerTwo', { x: -200, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.picTwo', { x: -800, opacity: 0, duration: 1.5, delay: 1 });
    gsap.from('.main-containerTwo', { opacity: 0, duration: 1.5, delay: 1.5})
}

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: '.headerTwo',
    start: 'top 75%', 
    onEnter: scrollAnim 
});