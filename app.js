// window.addEventListener("load", function () {
	var playTracker = 0;
	var player = "X";
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

	function clickBox(e) {

		playTracker += 1;
		if (playTracker % 2 === 0){
			event.target.innerHTML = "O";
			player = "X";
			document.getElementById("player").value = "X";

		}


		else {
			event.target.innerHTML = "X";
			player = "0";
			document.getElementById("player").value = "O";

		}

		event.target.style.backgroundColor = "gray";

		// if (boardLayout[0][0] == "X" && boardLayout[0][1] == "X" && boardLayout[0][2] == "X" ) {
		// 	console.log("h");
		// }

		event.target.removeEventListener("click", clickBox );
	}
// console.log(boardLayout);
console.log("Game Load");

function resetBoard (e) {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = " ";
		boxes[i].style.backgroundColor = "#f2f2f2";
		boxes[i].addEventListener("click", clickBox);
		document.getElementById("player").value = "X";
		playTracker = 0;

	}

}


		// var reset1 = document.getElementsByClassName("reset");
		// reset1[0].addEventListener("click", resetFunction);




// });