//your JS code here. If required.
let speed = document.getElementById("speed");
let speedValue = 500/1;
speed.addEventListener("change",(event)=>{
		speedValue = 500/parseInt(speed.value);
	})
		let textvalue = "We love Programming";
		let text = document.getElementById("text");
		
		for(let i=0;i<textvalue.length;i++){
			setInterval(()=>{
				console.log(textvalue[i]); 
				text.innerHTML+=textvalue[i];
			},speedValue)
		}