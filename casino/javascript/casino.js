
var point = document.getElementById('button1');
point.addEventListener(onmousedown, spin1);

function spin1(){
	document.getElementById('button1').style.backgroundImage="url(image/button-hover.png)";
	
	var teker1= document.getElementById('teker');

	  var random = Math.floor(Math.random() *100);
	  	var deg = random*18;
	  	console.log(deg)
  	teker1.style.webkitTransform = 'rotate('+deg+'deg)';

  	var qaliq = random%20;
  	if (qaliq%2==1 || qaliq==1){
  		setTimeout(function function_name(argument) {
  			alert('Bir daha sina :P ')
  		},3000)
  	}
  	else if(qaliq==0){
  		setTimeout(function function_name(argument) {
  			alert('GIFT ')
  		},3000)
  	}
  	else if( qaliq==6 || qaliq==12 || qaliq==16){
  		setTimeout(function function_name() {
  			alert('Elaa')
  		},3000)
  	}
  	 else{
  		setTimeout(function function_name() {
  			alert('Tebrikler')
  		},3000)
  	}
  	console.log(qaliq)

  	var point_deg=-35;
	function pointer() {
  		document.getElementById('pointer').style.webkitTransform = 'rotate('+point_deg+'deg)'
  		if (point_deg==-35) {
  		point_deg=0;
  		}
  		else{
  			point_deg=-35
  		}
  	}
  	var sss=setInterval(function () {
  		pointer();
  	},182)
  	setTimeout(function () {
  		 clearInterval(sss)
  	},2000)

  	

}


function ss(){
	document.getElementById('button1').style.backgroundImage="url(image/button-normal.png)"
	
}

function spin2(){
	document.getElementById('button1').style.backgroundImage="url(image/button-hover.png)"
	setTimeout(ss,2000)
}