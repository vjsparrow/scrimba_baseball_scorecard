let home_score = 0;
let away_score = 0;

function addOneHome() {
	home_score += 1;
	document.getElementById('home-score').textContent = home_score;
	highlightLeader();
}

function addTwoHome() {
	home_score += 2;
	document.getElementById('home-score').textContent = home_score;
	highlightLeader();
}
function addThreeHome() {
	home_score += 3;
	document.getElementById('home-score').textContent = home_score;
	highlightLeader();
}
function addOneAway() {
	away_score += 1;
	document.getElementById('away-score').textContent = away_score;
	highlightLeader();
}

function addTwoAway() {
	away_score += 2;
	document.getElementById('away-score').textContent = away_score;
	highlightLeader();
}
function addThreeAway() {
	away_score += 3;
	document.getElementById('away-score').textContent = away_score;
	highlightLeader();
}

function reset() {
	home_score = 0;
	away_score = 0;
	document.getElementById('home-score').textContent = home_score;
	document.getElementById('away-score').textContent = away_score;
	document.getElementById("away-score").style.color = "#ffff3f";
	document.getElementById("home-score").style.color = "#ffff3f";
}

function highlightLeader() {
	if (home_score > away_score) {
		document.getElementById("home-score").style.color = "#70e000";
		document.getElementById("away-score").style.color = "#F94F6D";
	}
	else if (home_score < away_score) {
		document.getElementById("away-score").style.color = "#70e000";
		document.getElementById("home-score").style.color = "#F94F6D";
	}
	else {
		document.getElementById("away-score").style.color = "#ffff3f";
		document.getElementById("home-score").style.color = "#ffff3f";
	}
}