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
