/* Functions JS */

$(function(){
	$('.menu-toggle').on('click', function(){
		if($('#sidebar').is(':visible')) {
			$('#sidebar').animate(
				{'width': '0px'},
				'slow',
				function(){
					$('#sidebar').hide();
				}
			);
			$('#content').animate(
				{ 'margin-left': '0px' },
				'slow'
			);
		}
		else {
			$('#sidebar').show();
			$('#sidebar').animate(
				{ 'width': '210px' },
				'slow'
			);
			$('#content').animate(
				{ 'margin-left': '210px' },
				'slow'
			);
		}	
	});
});