	var playTracker = 0;
	var player = "X";
	var boardScore = [[0,0,0],[0,0,0],[0,0,0]];

// box layour var's //
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var box4 = document.getElementById("box4");
	var box5 = document.getElementById("box5");
	var box6 = document.getElementById("box6");
	var box7 = document.getElementById("box7");
	var box8 = document.getElementById("box8");
	var box9 = document.getElementById("box9");

// Need for win Condition: Not working //
	function winCheck(){
	var boardLayout = [
	[box1.innerHTML, box2.innerHTML, box3.innerHTML],
	[box4.innerHTML, box5.innerHTML, box6.innerHTML],
	[box7.innerHTML, box8.innerHTML, box9.innerHTML]];
			}

// Adding Click Events to box's //
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", clickBox);

	}

// Player Tracker & Player Marker //
	function clickBox(e) {

		playTracker += 1;
		if (playTracker % 2 === 0){
			event.target.innerHTML = "O";
			player = "X";
			document.getElementById("player").value = "X";
			document.getElementById("player").style.backgroundColor = "#66FF33";
			event.target.style.backgroundColor = "#3399FF";
		}
		else {
			event.target.innerHTML = "X";
			player = "0";
			document.getElementById("player").value = "O";
			document.getElementById("player").style.backgroundColor = "#3399FF";
			event.target.style.backgroundColor = "#66FF33";
		}
		
		event.target.removeEventListener("click", clickBox );
	}

// Reset Board to defualt state, play X's turn. //
function resetBoard (e) {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = " ";
		boxes[i].style.backgroundColor = "#f2f2f2";
		boxes[i].addEventListener("click", clickBox);
		document.getElementById("player").style.backgroundColor = "#66FF33";
		document.getElementById("player").value = "X";
		playTracker = 0;

	}

}
// set defualt color //
document.getElementById("player").style.backgroundColor = "#66FF33";
console.log("Game Load");