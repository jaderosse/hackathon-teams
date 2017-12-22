$(document).ready(function() {
	//adding this
	$('.delete-link').click(function(e){
		e.preventDefault();
		// console.log('click event was reached');
		//AJAX call goes here	

		$.ajax({
			method: "DELETE",
			url: $(this).attr('href')
		}).done(function(response){
			// console.log('promise reached');
			window.location.href='/teams';
		});
	});

	$('.edit-form').submit(function(e){
		e.preventDefault();
		// console.log('edit form ajax function');

		$.ajax({
			method: "PUT",
			url: $(this).attr('action'),
			data: {
				name: $('#new-name').val(),
				members: $('#members').val()
			}
		}).done(function(response){
			//console.log('got to the promise');
			window.location.href = '/teams';
		});
	});
});
