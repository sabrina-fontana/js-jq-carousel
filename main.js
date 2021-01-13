// FUNZIONI
function slideLeft(activeImage, firstImage, lastImage, activeClass) {
  // se la prima immagine è active, ricomincio dall'ultima
  if ($(firstImage).hasClass(activeClass)) {
    $(firstImage).removeClass(activeClass);
    $(lastImage).addClass(activeClass);
    // altrimenti vai a quella precedente
  } else {
   $(activeImage).removeClass(activeClass).prev().addClass(activeClass);
 }
}

function slideRight(activeImage, firstImage, lastImage, activeClass) {
  // se l'ultima immagine è active, ricomincia dalla prima
  if ($(lastImage).hasClass(activeClass)) {
    $(lastImage).removeClass(activeClass);
    $(firstImage).addClass(activeClass);
  // atrimenti vai a quella successiva
  } else {
   $(activeImage).removeClass(activeClass).next().addClass(activeClass);
 }
}


// <- clicco sulla freccia a sinistra (torno indietro)
$('.fa-angle-left').click(function() {
  slideLeft('img.active', 'img.first', 'img.last', 'active');
 }
);

// -> clicco sulla freccia a destra (vado avanti)
$('.fa-angle-right').click(function() {
  slideRight('img.active', 'img.first', 'img.last', 'active');
});

// per scorrere le immagini permettere anche l’uso delle frecce sinistra (37) e destra (39) della tastiera
$(document).keydown(function(k) {
  if(k.keyCode == 37) { // left
    slideLeft('img.active', 'img.first', 'img.last', 'active');
  }
  else if(k.keyCode == 39) { // right
    slideRight('img.active', 'img.first', 'img.last', 'active');
  }
});
