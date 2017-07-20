//hi
var count = 0;
var x = document.getElementById("btn");
var y = document.getElementById("results");
function counter(){
	if (count > 25 && count < 100){
		count += 2;
		y.innerHTML = count + " click";
	}else if(count > 100){
		count *= 2;
		y.innerHTML = count + " click";
	}else{count++;
	y.innerHTML = count + " click";
	}
}