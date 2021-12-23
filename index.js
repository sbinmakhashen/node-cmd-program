// initiate the node package
const rs = require("readline-sync");

// global vars
const hobbies = [];
let hobbiesCount = 0;
let areYouSure = false;

// functions
function generalQuestions() {
	let username = rs.question("What is your name? ");
	let userHobby = rs.question(username + ", what is your hobby? ");
	// store hobby
	hobbies.push(userHobby);
}
generalQuestions();

// ask user how many hobbies they have?
function anyMoreHobbies() {
	hobbiesCount = rs.questionInt(
		hobbies + " is a cool hobby, how many other hobbies do you have? "
	);
}
anyMoreHobbies();

function addHobbies() {
	console.log("Great, what are they? ");
	let count = 0;
	while (count < hobbiesCount) {
		let userPrompt = rs.prompt();
		hobbies.push(userPrompt);
		count++;

		if (count < hobbiesCount) {
			console.log(
				"---Awesome " + userPrompt + " is cool, what's the other hobby?"
			);
		} else {
			console.log("I wish I can do " + hobbies + ", but I'm not real HAHAHA");
		}
	}
}
console.log("Your hobby count is: " + hobbiesCount);

// logic below
if (hobbiesCount > 0) {
	addHobbies();
} else {
	areYouSure = rs.keyInYN(
		"Are you sure " + hobbies + " is the only hobby you have?"
	);
}
// if the user decided that they want to add more hobbies
if (!areYouSure && hobbiesCount <= 1) {
	// asking the how many hobbies they have
	anyMoreHobbies();
	// storing the user's hobbies
	addHobbies();
} else if (areYouSure) {
	console.log(hobbies + " is a cool hobby :)");
}
