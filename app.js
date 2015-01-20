window.addEventListener("load", function () {
var playTracker = 0;
// var player = 1;
// var x = "X";
// var o = "O";
var boardScore = [[0,0,0],[0,0,0],[0,0,0]];


var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var boardLayout = [
	[box1.innerHTML, box2.innerHTML, box3.innerHTML],
	[box4.innerHTML, box5.innerHTML, box6.innerHTML],
	[box7.innerHTML, box8.innerHTML, box9.innerHTML]];

var boxes = document.getElementsByClassName("box");
		for (var i = 0; i < boxes.length; i++) {
		 boxes[i].addEventListener("click", clickBox);

		}

function clickBox(event) {

	playTracker += 1;
		if (playTracker % 2 === 0){
			event.target.innerHTML = "O";
			}
				

		else {
			event.target.innerHTML = "X";
			}
			
	event.target.style.backgroundColor = "gray";
						
		if (boardLayout[0][0] == "X" && boardLayout[0][1] == "X" && boardLayout[0][2] == "X" ) {
			console.log("h");
					}
				
		event.target.removeEventListener("click", clickBox );
				}
// console.log(boardLayout);
console.log("Game Load");

function resetBoard (event) {
		for (var i = 0; i < boxes.length; i++) {
		 boxes[i].innerHTML = " ";
		 boxes[i].style.backgroundColor = "white";
		 boxes[i].addEventListener("click", clickBox);

			}
		
		}

		// var reset1 = document.getElementsByClassName("reset");
		// reset1[0].addEventListener("click", resetFunction);




});