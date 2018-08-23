var first = 1;
var last = 5;
var questionNumber = 1;
var questions = ['The number of tickets of T2 sold in Bengaluru is approximately what percentage of the total number of tickets of the same tournament sold in all the cities together?',
				'Who has been chosen as the new chief of US space agency, NASA?',
				'Miguel Diaz-Canel has been elected as the new President of which nation?',
				'Which country recently honoured the first conquest of Mount Everest without bottled oxygen?',
				'What was the theme of the 2018 World Earth Day?'];
var options = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];

function previous() {
	if (questionNumber != 1) {
		questionNumber -= 1;
	}
	presentValues();
	$("#nex").css("color", "#FFFFFF");
	$('#nex').css({ "background-color": '#0352CC'});
	$('#nex').css({ "border-color": '#0352CC'});
	$("#nex").mouseover(function(){
		$("#nex").css("cursor", "pointer");
		$("#nex").css("background-color", "#FFFFFF");
		$("#nex").css("color", "#0352CC");
	});
	$("#nex").mouseout(function(){
		$("#nex").css("background-color", "#0352CC");
		$("#nex").css("color", "#FFFFFF");
	});
	if (questionNumber == 1) {
		$("#prev").css("color", "#FFFFFF");
		$('#prev').css({ "background-color": '#D3D3D3'});
		$('#prev').css({ "border-color": '#D3D3D3'});
		$("#prev").css("cursor", "default");
		$("#prev").mouseover(function(){
			$("#prev").css("cursor", "default");
			$("#prev").css("background-color", "#D3D3D3");
			$("#prev").css("color", "#FFFFFF");
		});
		$("#prev").mouseout(function(){
			$("#prev").css("background-color", "#D3D3D3");
			$("#prev").css("color", "#FFFFFF");
		});
	}
}

function next() {
	if (questionNumber != 5) {
		questionNumber += 1;
	}	
	presentValues();
	$("#prev").css("color", "#FFFFFF");
	$('#prev').css({ "background-color": '#0352CC'});
	$('#prev').css({ "border-color": '#0352CC'});
	$("#prev").mouseover(function(){
		$("#prev").css("cursor", "pointer");
		$("#prev").css("background-color", "#FFFFFF");
		$("#prev").css("color", "#0352CC");
	});
	$("#prev").mouseout(function(){
		$("#prev").css("background-color", "#0352CC");
		$("#prev").css("color", "#FFFFFF");
	});
	if (questionNumber == 5) {
		$("#nex").css("color", "#FFFFFF");
		$('#nex').css({ "background-color": '#D3D3D3'});
		$('#nex').css({ "border-color": '#D3D3D3'});
		$("#nex").css("cursor", "default");
	}
}

function presentValues() {
	document.getElementById("questionNumber").innerHTML = "Question Number : " + questionNumber;
	document.getElementById('question').innerHTML = questions[questionNumber-1];
	document.getElementById('option1').innerHTML = options[questionNumber-1][0];
	document.getElementById('option2').innerHTML = options[questionNumber-1][1];
	document.getElementById('option3').innerHTML = options[questionNumber-1][2];
	document.getElementById('option4').innerHTML = options[questionNumber-1][3];
}
