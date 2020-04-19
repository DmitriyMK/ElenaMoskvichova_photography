



// Scrollmagic
let tl = new TimelineMax();
tl.to('img', 1.65, { y: -200, scaleX: 0.75, rotationX: 20, scaleY: 0.75, opacity: 0, ease: Linear.easeNone }, 0);
// tl.to('.header__logo', 1, { y: -70, ease: Power4.easeOut }, 0);
// tl.to('.go', 1.85, { y: -140, ease: Linear.easeNone }, 0);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: '600',
  offset: 80,
  triggerElement: '#trigger',
  triggerHook: 0,
});

scene.setTween(tl);
scene.addTo(controller);
scene.addIndicators();
