
var readlineSync = require("readline-sync");
var chalk =require("chalk");
var score = 0;
var userName = readlineSync.question(chalk.red("What is your name ? "));
console.log(chalk.italic.blue("welcome " + userName + " Lets see How much you know about Uday Pratap."));

var questionOne = {
  question : "Where do i live ? \n a: Bokaro,\n b: jamshedpur, \n c: Agra, \n d: America",
  answer : "b"
};


var questionTwo = {
  question : "Which type of movies do i like ? \n a: thriller,\n b: horror, \n c: sci - fi, \n d: adventure",
  answer : "d"
};

var questionThree = {
  question : "Where do i currently stay ? \n a: Bokaro,\n b: jamshedpur, \n c: Agra, \n d: America",
  answer : "d"
};


var questionFour = {
  question : "which Food i like most ? \n a: Idli,\n b: Dosa, \n c: puri, \n d: Aloo Dum",
  answer : "b"
};

var questionFive = {
  question : "From which branch, I have done my Graduation ? \n a: Mechanical,\n b: civil, \n c: computer science, \n d: Electrical",
  answer : "b"
};


var questionSix = {
  question : "Which pc game do i like most ? \n a: Recoil,\n b: GTA, \n c: RoadRush, \n d: Mario",
  answer : "a"
};



var questions = [
	questionOne,
	questionTwo,
	questionThree,
	questionFour,
	questionFive,
  questionSix
];

for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	playQuiz(currentQuestion.question, currentQuestion.answer);
}


var highScore = [
	{
		name: 'amolak',
		score: '6'
	},
	{
		name: 'sumir',
		score: '5'
	},
  {
		name: 'mithi',
		score: '4'
	}
];

function playQuiz(question, answer) {
	var userAns = readlineSync.question(question);

	if (userAns.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.red(' right answer \n'));
		score = score + 1;
      console.log(chalk.red(`your current score ${score}`));
	} else {
		console.log(chalk.red(' wrong answer \n'));
      console.log(chalk.blue(`your current score ${score}`));
	}
}



console.log('Your score: ' + score);
console.log('Check out the high score');

for (var j = 0; j < highScore.length; j++) {
	console.log(chalk.bold(highScore[j].name + ' : ' + highScore[j].score)); 
}

calculateScore()

function calculateScore(){
if(highScore[0].score < score){
  console.log(`you score is higher than ${highScore[0].name}, Ping me name, I will update it in scoreboard`);
}
else if(highScore[1].score < score){
  console.log(`you score is higher than ${highScore[1].name}, Ping me, I will update it in scoreboard`);
}
else if(highScore[1].score == score){
console.log(chalk.red(`Your score is same as ${highScore[1].name}, Ping me name with score, I will add your name on scoreboard`));
}
else{
  console.log(chalk.blue('you loose the quiz'));
}

}

