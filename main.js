// clicco sulla freccia a sinistra (torno indietro)
$('.fa-angle-left').click(function() {
  if ($('img.active').hasClass('first')) {
    $('img.first').removeClass('active');
    $('img.last').addClass('active');
  } else {
   $('img.active').removeClass('active').prev().addClass('active');
 }
});

// clicco sulla freccia a destra (vado avanti)
$('.fa-angle-right').click(function() {
  if ($('img.active').hasClass('last')) {
    $('img.last').removeClass('active');
    $('img.first').addClass('active');
  } else {
    $('img.active').removeClass('active').next().addClass('active');
  }
});

// per scorrere le immagini permettere anche l’uso delle frecce sinistra (37) e destra (39) della tastiera
$(document).keydown(function(k) {
  if(k.keyCode == 37) { // left
    $('img.active').removeClass('active').prev().addClass('active');
  }
  else if(k.keyCode == 39) { // right
    $('img.active').removeClass('active').next().addClass('active');
  }
});
