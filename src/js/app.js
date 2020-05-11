
sayHello();



window.onload = function() {

  let timeline = new TimelineMax();

  timeline
    .fromTo('.header__illustration', 0.35,
      {
        scale: 0.9,
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate3d(10px, 0, 0)'
      },
      {
        scale: 1,
        opacity: 1,
        visibility: 'visible',
        transformOrigin: '100% 0',
        transform: 'translate3d(0px, 0px, 0px)',
        ease: Power1.easeIn
      },
      0.4
    )
    .fromTo('.header__img', 0.45,
      {
        visibility: 'hidden',
        opacity: 0
      },
      {
        visibility: 'visible',
        opacity: 1,
        rotation: -5,
        transformOrigin: '100% 0',
        ease: Power1.easeIn
      },
      0.5
    );
};


// Scrollmagic
let controller = new ScrollMagic.Controller();

$('.gallery__item').each(function() {
  let titles = $(this).find('.gallery__title');
  let images = $(this).find('.gallery__img');

  let tl1 = new TimelineMax({
    pause: true
  });

  let tl2 = new TimelineMax();

  let tl3 = new TimelineMax();


  tl1.add('start')
    .fromTo(titles, 0.35,
      {
        y: '100px',
        opacity: 0,
        skewY: 10,
        skewX: 35
      },
      {
        y: '0px',
        opacity: 1,
        skewY: 0,
        skewX: 0,
        ease: Elastic.easeOut.slow
      },
      'start'
    );

  tl2.to(titles, 4, {
    x: '-400px',
    ease: Elastic.easeOut.slow
  });

  tl3.to(images, 1, {
    scaleX: 1.2,
    scaleY: 1.2,
    transformOrigin: '50% 50%',
    ease: Elastic.easeOut.slow
  });


  let scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.6,
    reverse: false
  })
    .setTween(tl1)
    .addIndicators()
    .addTo(controller);


  let scene2 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    duration: '1000'
  })
    .setTween(tl2)
    .addTo(controller);


  let scene3 = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -180,
    triggerHook: 0,
    duration: '1000'
  })
    .setTween(tl3)
    .addTo(controller);
});
