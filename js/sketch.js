$(document).ready(function(){
	var n = 20;

	for(var i = 1;i<n*n+1;i++){
		$('#container').append('<div class="cell"></div>');
	}
	
	$(document).on('mouseenter','div div.cell', function(){
		var currColor = $(this).css("background-color").substr(3);
		
		var colors = currColor.replace('(','').replace(')','').split(', ');
		
		var currRed = colors[0];
		var currGreen = colors[1];
		var currBlue = colors[2];

		if(currColor==="(255, 255, 255)"){
			$(this).css("background-color", getRandomColor());
		}else{
				currRed=Math.abs(currRed) - Math.abs(Math.floor(currRed/2));

				currGreen=Math.abs(currGreen) - Math.abs(Math.floor(currGreen/2));

				currBlue=Math.abs(currBlue) - Math.abs(Math.floor(currBlue/2));
			
			$(this).css("background-color", "rgb("+currRed.toString()+', '+
				currGreen.toString()+', '+
				currBlue.toString()+')');
		}
		//$(this).fadeTo(0,0);
		//$(this).fadeTo(200,1);
	});
});


function start(){
	$('div div.cell').remove();
	var n = prompt('enter new grid size');

	for(var i = 1;i<n*n+1;i++){
		$('#container').append('<div class="cell"></div>');
	}

	$('.cell').width(Math.floor(600/n) + "px");
	$('.cell').height(Math.floor(600/n) + "px");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}