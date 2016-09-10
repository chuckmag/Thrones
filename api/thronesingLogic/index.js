import WestorosPhase from "./WestorosPhase/westoros.js";
import PlanningPhase from "./PlanningPhase/planning.js";
import constants from "./Constants/constants.js";

const PlayTurn = function(gameState) {
	let newGameState = {...gameState};

	switch (gameState.phase)
	{
		case constants.phases.WESTOROS:
			newGameState = WestorosPhase(newGameState);
			break;
		case constants.phases.PLANNING:
			newGameState = PlanningPhase(newGameState);
			break;
		case constants.phases.ACTION:
			
			break;
	}

	return newGameState;
}


module.exports = PlayTurn;