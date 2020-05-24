// Rotate hover
let cardWrap = document.getElementsByClassName('instagram__item');
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
