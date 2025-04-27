//your JS code here. If required.
let btn = document.getElementById("btn");
btn.addEventListener("click",(event)=>{
	event.preventDefault();
	let speed = document.getElementById("speed").value;
	let textvalue = "We love Programming";
	let text = document.getElementById("text");
	let speedValue = 500/parseInt(speed);
	for(let i=0;i<textvalue.length;i++){}
		setInterval(()=>{
			text.innerHTML+=textvalue[i];
		},speedValue);
	
	}
})