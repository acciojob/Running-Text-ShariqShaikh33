//your JS code here. If required.
let speed = document.getElementById("speed");
let textvalue = "We love Programming";
let text = document.getElementById("text");
let currentIndex = 0; 
let speedValue = 500/1; 
speed.addEventListener("change",(event)=>{
	speedValue = 500/parseInt(speed.value);
})
	clearInterval(window.textInterval);
	window.textInterval = setInterval(()=>{
		if(currentIndex<textvalue.length){
			text.innerHTML+=textvalue[currentIndex];
			currentIndex++;
		}
		else{
			clearInterval(window.textInterval);
		}
	},speedValue)
		
		