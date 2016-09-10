import constants from "../Constants/constants.js";

const assignOrders = function(gameState) {
  let newGameState = {...gameState};

  return newGameState;    
}


const revealOrders = function(gameState) {
  let newGameState = {...gameState,
    subPhase: constants.subPhases.MESSENGER_RAVEN
  };
  return newGameState;    
}


const messengerRaven = function(gameState) {
  let newGameState = {...gameState};

  return newGameState;    
}


const PlanningPhase = function(gameState) {

  if (!gameState || !gameState.phase || gameState.phase !== constants.phases.PLANNING) {
    return gameState;
  }
  let newGameState = {...gameState};

  switch (newGameState.phase.subPhase) {
    case constants.subPhases.ASSIGN_ORDERS:
      newGameState = assignOrders(newGameState);
      break;
    case constants.subPhases.REVEAL_ORDERS:
      newGameState = revealOrders(newGameState);
      break;
    case constants.subPhases.MESSENGER_RAVEN:
      newGameState = messengerRaven(newGameState);
      break;
    default:
      break;
  }
  
  return newGameState;
}

module.exports = PlanningPhase;