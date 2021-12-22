var numColor=6;
var colors=generateRandomColor(numColor);
var squares=document.querySelectorAll(".square");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("resetButton");
var pickedColor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var modeBtn=document.querySelectorAll(".mode");
for(i=0;i<modeBtn.length;i++){
	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numColor=3:numColor=6;
		reset();
	});
}
function reset(){
	resetButton.textContent="New color";
	colors=generateRandomColor(numColor);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
}
resetButton.addEventListener("click",function(){
	reset();
});
for(var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});	
}
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return ("rgb("+r+", "+g+", "+b+")");
}