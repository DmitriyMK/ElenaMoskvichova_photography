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
