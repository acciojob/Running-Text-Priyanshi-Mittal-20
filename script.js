//your JS code here. If required.
let speed= document.getElementById("speed")
let text= document.getElementById("text")
function speedControl(speed)
{
	return (500/speed)ms
}
let finalSpeed=speedControl(speed.value)
setTimeout(()=>{
	text.value="We love Programming!"
},finalSpeed)