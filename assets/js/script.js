$(document).ready(function(){
  // Lors du double clique avec l'evenement .dblclick(), une largeur de 500px va s'appliquer sur l'image
  $('#image').dblclick(function() {
      $(this).css('width','500px');
  });
});

// Solution 2 , utiliser seulement .width
