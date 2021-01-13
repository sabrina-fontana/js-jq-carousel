// FUNZIONI
function slideLeft() {
  // se la prima immagine è active, ricomincio dall'ultima
  if ($('img.first').hasClass('active')) {
    $('img.first').removeClass('active');
    $('img.last').addClass('active');
    // altrimenti vai a quella precedente
  } else {
   $('img.active').removeClass('active').prev().addClass('active');
 }
}

function slideRight() {
  // se l'ultima immagine è active, ricomincia dalla prima
  if ($('img.last').hasClass('active')) {
    $('img.last').removeClass('active');
    $('img.first').addClass('active');
  // atrimenti vai a quella successiva
  } else {
   $('img.active').removeClass('active').next().addClass('active');
 }
}

// <- clicco sulla freccia a sinistra (torno indietro)
$('.fa-angle-left').click(function() {
  slideLeft();
});

// -> clicco sulla freccia a destra (vado avanti)
$('.fa-angle-right').click(function() {
  slideRight();
});

// per scorrere le immagini permettere anche l’uso delle frecce sinistra (37) e destra (39) della tastiera
$(document).keydown(function(k) {
  if(k.keyCode == 37) { // left
    slideLeft();
  }
  else if(k.keyCode == 39) { // right
    slideRight();
  }
});

// BONUS Cliccare sui pallini per mostrare l’immagine corrispondente
$('.fa-circle').eq(0).click(function() {
  $('img').removeClass('active');
  $('img').eq(0).addClass('active');
});

$('.fa-circle').eq(1).click(function() {
  $('img').removeClass('active');
  $('img').eq(1).addClass('active');
});

$('.fa-circle').eq(2).click(function() {
  $('img').removeClass('active');
  $('img').eq(2).addClass('active');
});

$('.fa-circle').eq(3).click(function() {
  $('img').removeClass('active');
  $('img').eq(3).addClass('active');
});
