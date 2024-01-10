$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.thank').addClass('show-s');
			setTimeout(function() {
	  $('.section-nav').removeClass('show-des');
	  $('.thank').removeClass('show-s');
	    $('header').fadeIn();
				// Done Functions
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});

});