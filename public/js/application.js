$(document).ready(function() {
  $( "#images .image img" ).hover(function() {
    var filterVal = 'blur(0px)';
    $(this)
      .css('filter',filterVal)
      .css('webkitFilter',filterVal)
      .css('mozFilter',filterVal)
      .css('oFilter',filterVal)
      .css('msFilter',filterVal);
  });

  $( "#images .image img" ).mouseout(function() {
    var filterVal = 'blur(5px)';
    $(this)
      .css('filter',filterVal)
      .css('webkitFilter',filterVal)
      .css('mozFilter',filterVal)
      .css('oFilter',filterVal)
      .css('msFilter',filterVal);
  });

  $( "#album_id" ).change(function() {
      if($(this).val() == 0) {
        $("#new_album_name").css("visibility","visible");
      }
      else {
        $("#new_album_name").css("visibility","hidden");
      }
  });

  $( "#signup" ).submit(function( event ) {
    alert("Hola");
    event.preventDefault();
  });

});