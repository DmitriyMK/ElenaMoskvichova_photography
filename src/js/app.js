window.onload = function() {

  let timeline = new TimelineMax();

  timeline
    .fromTo('.header__illustration', 0.6,
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
    .fromTo('.header__img', 0.6,
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




// Rotate hover
let cardWrap = document.getElementsByClassName('intro__img');
document.body.addEventListener('mousemove', cursorPositionHandler);

function cursorPositionHandler(e) {
  var decimalX = e.clientX / window.innerWidth - 0.5;
  var decimalY = e.clientY / window.innerHeight - 0.5;

  TweenMax.to(cardWrap, 0.5, {
    rotationY: 10 * decimalX,
    rotationX: -10 * decimalY,
    ease: Quad.easeOut,
    transformPerspective: 1200,
    transformOrigin: 'center'
  });
}

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
    // .addIndicators()
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




// Hover moving
let hoverMouse = function($el) {

  $el.each(function() {
    let $self = $(this);
    let hover = false;
    let offsetHoverMax = $self.attr('offset-hover-max') || 0.5;
    let offsetHoverMin = $self.attr('offset-hover-min') || 0.7;

    let attachEventsListener = function() {
      $(window).on('mousemove', function(e) {
        let hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        // cursor
        let cursor = {
          x: e.clientX,
          y: e.clientY + $(window).scrollTop()
        };

        // size
        let width = $self.outerWidth();
        let height = $self.outerHeight();

        // position
        let offset = $self.offset();
        let elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        };

        // comparaison
        let x = cursor.x - elPos.x;
        let y = cursor.y - elPos.y;

        // dist
        let dist = Math.sqrt(x * x + y * y);

        // mutex hover
        let mutHover = false;

        // anim
        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    let onHover = function(x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.8,
        y: y * 0.8,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut
      });
    };
    let onLeave = function() {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.slow
      });
    };

    attachEventsListener();
  });
};

hoverMouse($('.gallery__link-wrap'));


// Hover animation
$('.gallery__link').mouseenter(function(e) {
  let parentOffset = $(this).offset();

  let relX = e.pageX - parentOffset.left;
  let relY = e.pageY - parentOffset.top;
  $(this).prev('.gallery__link-effect').css({ 'left': relX, 'top': relY });
  $(this).prev('.gallery__link-effect').removeClass('desplode-circle');
  $(this).prev('.gallery__link-effect').addClass('explode-circle');

});

$('.gallery__link').mouseleave(function(e) {

  let parentOffset = $(this).offset();

  let relX = e.pageX - parentOffset.left;
  let relY = e.pageY - parentOffset.top;
  $(this).prev('.gallery__link-effect').css({ 'left': relX, 'top': relY });
  $(this).prev('.gallery__link-effect').removeClass('explode-circle');
  $(this).prev('.gallery__link-effect').addClass('desplode-circle');

});

