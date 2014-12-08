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
    var email = $("#email").val();
    var password = $("#password").val();
    var email_rgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    var error_string = "";

    if (!email_rgx.test(email)) {
      error_string += "Invalid email format\n";
    }

    var pw_rgx_numeric = /\d/;

    if (!pw_rgx_numeric.test(password)) {
      error_string += "Password must have at least one numeric character.\n";
    }

    var pw_rgx_capital = /[A-Z]+/;

    if (!pw_rgx_capital.test(password)) {
      error_string += "Password must have at least one capital letter.\n";
    }

    var pw_rgx_length = /.{8,}/;

    if (!pw_rgx_length.test(password)) {
      error_string += "Password must be at least 8 characters long.\n";
    }

    if (!error_string=="") {
      alert(error_string);
    }

    event.preventDefault();
  });

});