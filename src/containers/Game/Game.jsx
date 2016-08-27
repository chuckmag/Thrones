import React from 'react';
import { connect } from 'react-redux';
import { leaveServer } from '../actions/index.jsx'

const mapStateToProps = (state) => {
  return {
    server: state.server
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLeaveGame: () => {
      dispatch(leaveServer())
    }
  };
};

let Game = ({ server, onLeaveGame }) => {
  return (
      <div>
        <div>
          Server Name : {server.name} | Player Count : {server.playerCount}/6 | Game Type : {server.gameType}
        </div>
        <button onClick={onLeaveGame}>Leave Game</button>
      </div>
    );
};
Game = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Game);

export default Game;