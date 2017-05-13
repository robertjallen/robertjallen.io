function openNav() {
	document.getElementById('sidenav').style.width = "100%";

	//Hides menu icon 
	document.getElementById('opn').style.display = "none";
}

function closeNav() {
	document.getElementById('sidenav').style.width = "0px";

	//Unhides menu icon
	document.getElementById('opn').style.display = "block";
}


$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var email = $('#inputEmail')
      var message = $('#inputMessage')
    
      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/bobbidigi34@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});