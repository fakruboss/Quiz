var questionNumber = 1;
var questions = ['The number of tickets of T2 sold in Bengaluru is approximately what percentage of the total number of tickets of the same tournament sold in all the cities together?',
				'Who has been chosen as the new chief of US space agency, NASA?',
				'Miguel Diaz-Canel has been elected as the new President of which nation?',
				'Which country recently honoured the first conquest of Mount Everest without bottled oxygen?',
				'What was the theme of the 2018 World Earth Day?'];
var options = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];

$(document).ready(function() {
	if (questionNumber == 1) {
		$('#prev').css({ "background-color": 'brown'});
	}
})

function previous() {
	if (questionNumber != 1) {
		questionNumber -= 1;
	presentValues();
	}
}

function next() {
	if (questionNumber != 5) {
		questionNumber += 1;
	presentValues();
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
