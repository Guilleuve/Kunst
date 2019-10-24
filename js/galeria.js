$('.galeria_img').click(function(e){

  var img = e.target.src;
  var modal = '<div class="modal"><img src="'+ img + '" class="modal_img"><div class="modal_boton">X</div></div>';
          /*Insertar contenido*/
  $('body').append(modal);
  $('.modal_boton').click(function(){
    $('.modal').remove();

  })
});


$(document).keyup(function(e){
  if(e.which == 27){
    $('.modal').remove();
  }
})
