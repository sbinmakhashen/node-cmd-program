const rs = require("readline-sync");
let hobbies = [];
let hobbiesCount = 0;
let areYouSure = false;

function generalQuestions() {
	let username = rs.question("What is your name? ");
	let userHobby = rs.question(username + ", what is your hobby? ");
	// store hobby
	hobbies.push(userHobby);
}
generalQuestions();

// ask user how many hobbies they have?
function anyMoreHobbies(hobbiesCount) {
	hobbiesCount = rs.questionInt(
		hobbies + " is a cool hobby, how many other hobbies do you have? "
	);
}
anyMoreHobbies(hobbiesCount);

// logic below
if (hobbiesCount > 0) {
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
} else {
	areYouSure = rs.keyInYN(
		"Are you sure " + hobbies + " is the only hobby you have?"
	);
}

console.log("the current boolean of AreYouSure is: " + areYouSure);
