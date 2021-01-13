// <- clicco sulla freccia a sinistra (torno indietro)
$('.fa-angle-left').click(function() {
  // se la prima immagine è active, ricomincia dall'ultima
  if ($('img.first').hasClass('active')) {
    $('img.first').removeClass('active');
    $('img.last').addClass('active');
    // altrimenti torna a quella precedente
  } else {
   $('img.active').removeClass('active').prev().addClass('active');
 }
});

// -> clicco sulla freccia a destra (vado avanti)
$('.fa-angle-right').click(function () {
  // se l'ultima immagine è active, ricomincia dalla prima
  if ($('img.last').hasClass('active')) {
    $('img.last').removeClass('active');
    $('img.first').addClass('active');
    // atrimenti vai a quella successiva
  } else {
    $('img.active').removeClass('active').next().addClass('active');
  }
});

// per scorrere le immagini permettere anche l’uso delle frecce sinistra (37) e destra (39) della tastiera
$(document).keydown(function(k) {
  if(k.keyCode == 37) { // left
    if ($('img.first').hasClass('active')) {
      $('img.first').removeClass('active');
      $('img.last').addClass('active');
    } else {
     $('img.active').removeClass('active').prev().addClass('active');
   }
  }
  else if(k.keyCode == 39) { // right
    if ($('img.last').hasClass('active')) {
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
    } else {
      $('img.active').removeClass('active').next().addClass('active');
    }
  }
});
