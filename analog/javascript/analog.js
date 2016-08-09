// var date = new Date();
// var seconds = date.getSeconds();
// var minutes = date.getMinutes();
// var hours = date.getHours();

// 	document.getElementById('second1')=date.getSeconds();
// 	document.getElementById('minute1').style.webkitTransform=minutes;
// 	document.getElementById('hour1').style.webkitTransform=hours;

function analog(){
		var date = new Date();

	var seconds = date.getSeconds();
	var secAng = seconds*6;

	var minutes = date.getMinutes();
	var minAng = minutes*6+(seconds/10);

	var hours = date.getHours();
	var hourAng = hours*30+(minutes/10);
	document.getElementById('second1').style.webkitTransform='rotate('+(secAng)+'deg)';
	document.getElementById('minute1').style.webkitTransform='rotate('+(minAng)+'deg)';
	document.getElementById('hour1').style.webkitTransform='rotate('+(hourAng)+'deg)';
	
}

setInterval(analog,1000)