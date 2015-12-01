$(document).ready(function(){
	start();
	$(document).on('mouseenter','div div.cell', function(){
		$(this).css("background-color", getRandomColor());
	});
});


function start(){
	$('div div.cell').remove();
	var n = $('input#n').val();
	$('#container').width(n*50 + "px");
	$('#container').height(n*50 + "px");
	for(var i = 1;i<n*n+1;i++){
		$('#container').append('<div class="cell"></div>');
	}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}