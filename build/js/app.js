"use strict";

var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();

sayHello();

window.onload = function () {
  var timeline = new TimelineMax();
  timeline // .fromTo('.header__illustration', 0.35,
  //   {
  //     scale: 0.9,
  //     opacity: 0,
  //     visibility: 'hidden',
  //     transform: 'translate3d(10px, 0, 0)'
  //   },
  //   {
  //     scale: 1,
  //     opacity: 1,
  //     visibility: 'visible',
  //     transformOrigin: '100% 0',
  //     transform: 'translate3d(0px, 0px, 0px)',
  //     ease: Power1.easeIn
  //   },
  //   0.4
  // )
  .fromTo('.header__img', 0.45, {
    visibility: 'hidden',
    opacity: 0
  }, {
    visibility: 'visible',
    opacity: 1,
    rotation: -5,
    transformOrigin: '100% 0',
    ease: Power1.easeIn
  }, 0.5);
}; // Scrollmagic


var controller = new ScrollMagic.Controller();
$(".gallery__item").each(function () {
  var titles = $(this).find(".gallery__title");
  var images = $(this).find(".gallery__img");
  var tl1 = new TimelineMax({
    pause: true
  });
  var tl2 = new TimelineMax();
  var tl3 = new TimelineMax();
  var tl4 = new TimelineMax();
  tl1.add("start").fromTo(titles, 0.35, {
    y: "100px",
    opacity: 0,
    skewY: 10,
    skewX: 35
  }, {
    y: "0px",
    opacity: 1,
    skewY: 0,
    skewX: 0,
    ease: Elastic.easeOut.slow
  }, '0.5');
  tl2.to(titles, 4, {
    x: "-400px",
    ease: Elastic.easeOut.slow
  });
  tl3.to(images, 1, {
    scaleX: 1.2,
    scaleY: 1.2,
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut.slow
  });
  tl4.fromTo('.line', 0.25, {
    opacity: 0
  }, {
    opacity: 1,
    scale: 1.2,
    transformOrigin: "0% 100%",
    ease: Elastic.easeOut.slow
  }, "0.5");
  tl4.fromTo('.review__illustration2', 0.25, {
    opacity: 0,
    x: '40px'
  }, {
    opacity: 1,
    x: 0,
    ease: Elastic.easeOut.slow
  }, "0.5");
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.6,
    reverse: false
  }).setTween(tl1) // .addIndicators()
  .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    duration: "1000"
  }).setTween(tl2).addTo(controller);
  var scene3 = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -180,
    triggerHook: 0,
    duration: "1000"
  }).setTween(tl3).addTo(controller);
  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#review'
  }).setTween(tl4).addIndicators().addTo(controller);
});
$(".review__slider").slick((_$$slick = {
  dots: false,
  arrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  infinite: true,
  autoplaySpeed: 3500,
  autoplay: true
}, _defineProperty(_$$slick, "infinite", true), _defineProperty(_$$slick, "cssEase", "cubic-bezier(0.7, 0, 0.3, 1)"), _defineProperty(_$$slick, "touchThreshold", 100), _$$slick));
$('.scrolling__link').on('click', function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1000);
}); // Hover animation

$('.gallery__link').mouseenter(function (e) {
  var parentOffset = $(this).offset();
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev('.gallery__link-effect').css({
    'left': relX,
    'top': relY
  });
  $(this).prev('.gallery__link-effect').removeClass('desplode-circle');
  $(this).prev('.gallery__link-effect').addClass('explode-circle');
});
$('.gallery__link').mouseleave(function (e) {
  var parentOffset = $(this).offset();
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev('.gallery__link-effect').css({
    'left': relX,
    'top': relY
  });
  $(this).prev('.gallery__link-effect').removeClass('explode-circle');
  $(this).prev('.gallery__link-effect').addClass('desplode-circle');
}); // Hover moving

var hoverMouse = function hoverMouse($el) {
  $el.each(function () {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr('offset-hover-max') || 0.5;
    var offsetHoverMin = $self.attr('offset-hover-min') || 0.7;

    var attachEventsListener = function attachEventsListener() {
      $(window).on('mousemove', function (e) {
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin; // cursor

        var cursor = {
          x: e.clientX,
          y: e.clientY + $(window).scrollTop()
        }; // size

        var width = $self.outerWidth();
        var height = $self.outerHeight(); // position

        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        }; // comparaison

        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y; // dist

        var dist = Math.sqrt(x * x + y * y); // mutex hover

        var mutHover = false; // anim

        if (dist < width * hoverArea) {
          mutHover = true;

          if (!hover) {
            hover = true;
          }

          onHover(x, y);
        } // reset


        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function onHover(x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.8,
        y: y * 0.8,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut
      });
    };

    var onLeave = function onLeave() {
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

hoverMouse($('.gallery__link-wrap')); // Rotate hover

var cardWrap = document.getElementsByClassName('instagram__item');
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

function sayHello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Made with ❤️ by alchimic %c ----/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Made with love ❤️  ❤️');
  }
}

$(window).scroll(function () {
  var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  var start = document.documentElement.clientHeight;

  if ($(this).scrollTop() > start / 2) {
    $('.scrollup').fadeIn();
    var persent = ($(this).scrollTop() + start) / scrollHeight * 100;
    var angle = persent * 0.02 - 1 / 2;
    var x = 180 * Math.cos(angle * Math.PI) + 100;
    var y = 180 * Math.sin(angle * Math.PI) + 100;
    var rez;

    if (Math.cos(angle * Math.PI) >= 0) {
      rez = 'M 100,-80 A180,180   0  0, 1 ' + x + ',' + y;
    } else {
      rez = 'M 100,-80 A180,180   0  0, 1 100 280 m0,0 A180,180 0  0, 1 ' + x + ',' + y;
    }

    $('#path-anim').attr('d', rez);
  } else {
    $('.scrollup').fadeOut();
  }
});
$('.scrollup').click(function () {
  $('html, body').animate({
    scrollTop: 0
  });
  return false;
});