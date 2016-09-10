import constants from "../Constants/constants.js";

const drawWestorosCards = function(westorosCards) {
	let newWestorosCards = {...westorosCards};

	return westorosCards;
}

const advanceWildings = function(gameState) {
	let newGameState = {...gameState};

	return newGameState.wildingPower;
}

const resolveWestorosCards = function(gameState) {

}

const WestorosPhase = function(gameState) {
	let newGameState = {...gameState};

	if (gameState.phase !== constants.phases.WESTOROS) {
		return newGameState;
	}
	newGameState.round++;
	newGameState.westorosCards = drawWestorosCards(newGameState);
	newGameState.wildingPower = advanceWildings(newGameState);

	newGameState = resolveWestorosCards(newGameState);

	return newGameState;
}


module.exports = WestorosPhase;