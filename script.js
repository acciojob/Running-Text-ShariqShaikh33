//your JS code here. If required.
let btn = document.getElementById("btn");
btn.addEventListener("click",(event)=>{
	event.preventDefault();
	let speed = document.getElementById("speed").value;
	console.log(speed);
	let textvalue = "We love Programming";
	let rendertext = "";
	let text = document.getElementById("text");
	let speedValue = 500/parseInt(speed);
	for(let i=0;i<textvalue.length;i++){
		console.log(textvalue[i])
		setInterval(()=>{
			text.innerHTML+=textvalue[i];
			console.log("Log");
		},speedValue);
	}
	console.log("clicked");
})